// 러버블의 createServerFn + connector-gateway.lovable.dev 경유 방식을 대체합니다.
// 정보보안 승인 시 아래 URL을 실제 배포된 Google Apps Script 웹앱 URL로 교체하세요.
// (Apps Script 편집기 > 배포 > 새 배포 > 웹 앱 > 액세스: 모든 사용자)
const APPS_SCRIPT_URL = "https://script.google.com/a/macros/bucketplace.net/s/AKfycbwZg2RfMVEJze5VlFpf_QqaExXdLsWzCaHDYiNrgpzppMUDR3B-UsTNFaM2fndQUptIxA/exec";

export type LeadInput = {
  name: string;
  phone: string;
  services: string[];
};

export async function submitLead(input: LeadInput): Promise<{ ok: true }> {
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    // Apps Script 웹앱은 프리플라이트(OPTIONS)를 지원하지 않으므로
    // text/plain으로 보내 단순 요청(simple request)으로 처리합니다.
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      name: input.name,
      phone: input.phone,
      services: input.services.join(", "),
    }),
  });

  if (!res.ok) {
    throw new Error(`신청 저장에 실패했어요 [${res.status}]`);
  }

  // Apps Script 웹앱은 항상 HTTP 200을 반환하므로, 응답 바디의 ok 필드로
  // 실제 성공 여부를 다시 확인합니다.
  const body = (await res.json()) as { ok?: boolean; error?: string };
  if (!body.ok) {
    throw new Error(body.error ?? "신청 저장에 실패했어요");
  }

  return { ok: true };
}
