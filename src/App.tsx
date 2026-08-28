import { useState } from "react";
import { toast } from "sonner";
import { ServiceCard } from "@/components/ServiceCard";
import { KakaoBottomSheet } from "@/components/KakaoBottomSheet";
import { LandingStory } from "@/components/LandingStory";
import { Toaster } from "@/components/ui/sonner";

import { submitLead } from "@/lib/submitLead";
import { cn } from "@/lib/utils";

import iconInterior from "@/assets/icon-interior.png";
import iconPartial from "@/assets/icon-partial.png";
import iconMoving from "@/assets/icon-moving.png";
import iconCleaning from "@/assets/icon-cleaning.png";
import iconWifi from "@/assets/icon-wifi.png";
import iconWater from "@/assets/icon-water.png";

const SERVICES = [
  { id: "집 전체 시공", icon: iconInterior, desc: "설계부터 시공까지 믿고 맡길 검증된 업체만" },
  { id: "부분 시공", icon: iconPartial, desc: "주방, 욕실, 도배·장판 등 검증된 업체만" },
  { id: "이사 업체", icon: iconMoving, desc: "안심하고 맡길 이사 업체" },
  { id: "입주 청소", icon: iconCleaning, desc: "꼼꼼하게 입주 청소를 도와드려요" },
  { id: "인터넷 설치", icon: iconWifi, desc: "현금 혜택 가장 많은 곳으로 연결" },
  { id: "가전 렌탈", icon: iconWater, desc: "정수기·비데 등 딱 맞는 조건으로 연결" },
];

function formatPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length < 4) return d;
  if (d.length < 8) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;
}

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const phoneValid = /^01[016789]-\d{3,4}-\d{4}$/.test(phone);
  const canSubmit = name.trim().length > 0 && phoneValid && selected.length > 0;

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    try {
      await submitLead({ name: name.trim(), phone, services: selected });
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
    <div className="min-h-screen w-full bg-background">
      <LandingStory onCtaClick={scrollToForm} />
      <main className="w-full">
        {/* Form */}
        <section className="-mt-[50px] bg-gradient-to-b from-background via-brand-soft/80 to-brand-soft/95 py-10 pb-28">
          <div className="mx-auto w-full max-w-[430px] px-5">
            <h2 className="text-[22px] font-bold text-ink">
              지금 무료로 견적 받기
            </h2>
            <form id="lead-form" onSubmit={onSubmit} className="scroll-mt-4 mt-6">
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
                    필요한 서비스 <span className="text-brand">*</span>
                  </p>
                  <p className="mt-1 text-[13px] text-ink-sub">필요한 서비스를 모두 고르시면 무빙플래너가 한번에 알아봐 드릴게요</p>
                  <div className="mt-3 space-y-2.5">
                    {SERVICES.map((s) => (
                      <ServiceCard
                        key={s.id}
                        icon={s.icon}
                        title={s.id}
                        desc={s.desc}
                        checked={selected.includes(s.id)}
                        onToggle={() => toggle(s.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        <KakaoBottomSheet
          open={sheetOpen}
          name={name.trim()}
          onClose={() => setSheetOpen(false)}
        />
      </main>

      {/* Fixed CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 w-full border-t border-border bg-background">
        <div className="mx-auto w-full max-w-[430px] px-2.5 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-3">
          <button
            type="button"
            onClick={() => {
              const form = document.getElementById("lead-form") as HTMLFormElement | null;
              if (canSubmit && !submitting) {
                form?.requestSubmit();
              } else {
                form?.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className={cn(
              "h-14 w-full rounded-[22px] border-2 text-[16px] font-bold",
              canSubmit && !submitting
                ? "bg-brand border-transparent text-brand-foreground"
                : "border-muted bg-muted text-ink-sub/60",
            )}
          >
            {submitting ? "신청 중..." : "지금 무료로 견적 받기"}
          </button>
        </div>
      </div>

      <Toaster />
    </div>
  );
}
