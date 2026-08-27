import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "성함을 입력해주세요").max(50),
  phone: z
    .string()
    .trim()
    .regex(/^01[016789]-?\d{3,4}-?\d{4}$/, "올바른 연락처를 입력해주세요"),
  services: z.array(z.string().min(1).max(30)).min(1).max(10),
});

export type LeadInput = z.infer<typeof leadSchema>;

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const sheetsKey = process.env["GOOGLE_SHEETS_API_KEY"];
    const spreadsheetId = process.env["GOOGLE_SHEETS_SPREADSHEET_ID"];

    const row = [
      new Date().toISOString(),
      data.name,
      data.phone,
      data.services.join(", "),
    ];

    if (!lovableKey || !sheetsKey || !spreadsheetId) {
      console.warn("Google Sheets not configured; lead not persisted", row);
      return { ok: true as const, stored: false as const };
    }

    const res = await fetch(
      `${GATEWAY_URL}/spreadsheets/${spreadsheetId}/values/'무빙패스_한번에신청'!A:D:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableKey}`,
          "X-Connection-Api-Key": sheetsKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values: [row] }),
      },
    );

    if (!res.ok) {
      const body = await res.text();
      console.error(`Sheets append failed [${res.status}]: ${body}`);
      throw new Error(`신청 저장에 실패했어요 [${res.status}]`);
    }

    return { ok: true as const, stored: true as const };
  });
