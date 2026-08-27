import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { ServiceCard } from "@/components/ServiceCard";
import { KakaoBottomSheet } from "@/components/KakaoBottomSheet";
import { LandingStory } from "@/components/LandingStory";

import { submitLead } from "@/lib/leads.functions";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "한번에 신청하기 | 오늘의집 무빙플래너" },
      {
        name: "description",
        content:
          "이사·청소·인테리어·인터넷·가전렌탈까지, 필요한 서비스만 고르면 전담 무빙플래너가 한번에 신청해드려요.",
      },
      { property: "og:title", content: "한번에 신청하기 | 오늘의집 무빙플래너" },
      {
        property: "og:description",
        content: "필요한 서비스만 고르면 전담 플래너가 상담부터 접수까지 대신 해드려요.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { id: "집 전체 시공", emoji: "🏠", desc: "설계부터 시공까지 믿고 맡길 검증된 업체만" },
  { id: "부분 시공", emoji: "🧻", desc: "주방, 욕실, 도배·장판 등 검증된 업체만" },
  { id: "이사 업체", emoji: "🚚", desc: "안심하고 맡길 이사 업체" },
  { id: "인터넷 설치", emoji: "📶", desc: "현금 혜택 가장 많은 곳으로 연결" },
  { id: "가전 렌탈", emoji: "🚰", desc: "정수기·비데 등 딱 맞는 조건으로 연결" },
];

function formatPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length < 4) return d;
  if (d.length < 8) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;
}

function Index() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const send = useServerFn(submitLead);

  const phoneValid = /^01[016789]-\d{3,4}-\d{4}$/.test(phone);
  const canSubmit = name.trim().length > 0 && phoneValid && selected.length > 0;

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    try {
      await send({ data: { name: name.trim(), phone, services: selected } });
      setSheetOpen(true);
    } catch (err) {
      console.error(err);
      toast.error("신청에 실패했어요. 잠시 후 다시 시도해주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () =>
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main className="mx-auto min-h-screen w-full max-w-[430px] bg-background pb-32">
      <LandingStory onCtaClick={scrollToForm} />

      {/* Form */}
      <form id="lead-form" onSubmit={onSubmit} className="scroll-mt-4 px-5 pt-10">

        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="text-[15px] font-bold text-ink">
              성함 <span className="text-brand">*</span>
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 50))}
              placeholder="이름을 입력해주세요"
              className="mt-2 h-14 w-full rounded-xl border border-border bg-card px-4 text-[16px] text-ink outline-none placeholder:text-ink-sub/60 focus:border-brand"
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-[15px] font-bold text-ink">
              연락처 <span className="text-brand">*</span>
            </label>
            <input
              id="phone"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              placeholder="010-0000-0000"
              className="mt-2 h-14 w-full rounded-xl border border-border bg-card px-4 text-[16px] text-ink outline-none placeholder:text-ink-sub/60 focus:border-brand"
            />
            {phone.length > 0 && !phoneValid && (
              <p className="mt-2 text-[13px] text-destructive">
                숫자 11자리의 휴대폰 번호를 입력해주세요
              </p>
            )}
          </div>

          <div>
            <p className="text-[15px] font-bold text-ink">
              관심 있는 서비스 <span className="text-brand">*</span>
            </p>
            <p className="mt-1 text-[13px] text-ink-sub">복수 선택할 수 있어요</p>
            <div className="mt-3 space-y-2.5">
              {SERVICES.map((s) => (
                <ServiceCard
                  key={s.id}
                  emoji={s.emoji}
                  title={s.id}
                  desc={s.desc}
                  checked={selected.includes(s.id)}
                  onToggle={() => toggle(s.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Fixed CTA */}
        <div className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-[430px] border-t border-border bg-background px-5 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-3">
          <button
            type="submit"
            disabled={!canSubmit || submitting}
            className={cn(
              "h-14 w-full rounded-xl text-[16px] font-bold transition-colors",
              canSubmit && !submitting
                ? "bg-brand text-brand-foreground"
                : "bg-muted text-ink-sub/60",
            )}
          >
            {submitting ? "신청 중..." : "무료로 견적 받기"}
          </button>
        </div>
      </form>

      <KakaoBottomSheet
        open={sheetOpen}
        name={name.trim()}
        onClose={() => setSheetOpen(false)}
      />
    </main>
  );
}
