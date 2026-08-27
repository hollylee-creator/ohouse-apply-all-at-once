import { Info, Search, Calendar, MessageSquare, ChevronRight } from "lucide-react";
import kakaoChatAsset from "@/assets/kakao-chat.png.asset.json";
import movingCharacterAsset from "@/assets/moving-character.png.asset.json";
import iconInteriorAsset from "@/assets/icon-interior.png.asset.json";
import iconMovingAsset from "@/assets/icon-moving.png.asset.json";
import iconCleaningAsset from "@/assets/icon-cleaning.png.asset.json";
import iconWifiAsset from "@/assets/icon-wifi.png.asset.json";
import iconWaterAsset from "@/assets/icon-water.png.asset.json";

const ICONS = [
  { label: "인테리어\n시공", src: iconInteriorAsset.url, alt: "인테리어 시공 아이콘" },
  { label: "이사\n업체", src: iconMovingAsset.url, alt: "이사 업체 아이콘" },
  { label: "입주\n청소", src: iconCleaningAsset.url, alt: "입주 청소 아이콘" },
  { label: "인터넷\n설치", src: iconWifiAsset.url, alt: "인터넷 설치 아이콘" },
  { label: "가전\n렌탈", src: iconWaterAsset.url, alt: "가전 렌탈 아이콘" },
];

const BENEFITS = [
  {
    Icon: Search,
    title: "이사 필수 서비스 대신 접수",
    desc: "인테리어 시공, 이사 업체, 입주 청소 등 필요한 서비스를 대신 신청해드려요",
  },
  {
    Icon: Calendar,
    title: "이사 일정 관리",
    desc: "이사일에 맞춰 무엇을 준비할지 짚어드려요",
  },
  {
    Icon: MessageSquare,
    title: "궁금한건 뭐든지",
    desc: "업체 선정 기준부터 이사 관련 궁금한 점까지, 편하게 물어보세요",
  },
];

export function LandingStory({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <div>
      {/* 안내 배너 */}
      <div className="px-4 pt-4">
        <div className="flex gap-2 rounded-xl bg-muted px-4 py-3 text-[12px] leading-[1.5] text-ink-sub">
          <Info className="mt-0.5 size-4 shrink-0 text-ink-sub" />
          <p>
            이사 예정 고객님께만 드리는 안내예요.
            <br />
            나가시면 다시 볼 수 없어요. 잊지 않도록 스크랩해 두세요.
          </p>
        </div>
      </div>

      {/* 히어로 */}
      <section className="bg-gradient-to-b from-background via-brand-softer to-brand-soft/60 px-5 pb-10 pt-10 text-center">
        <span className="inline-flex items-center rounded-full border border-brand bg-background px-3.5 py-1.5 text-[13px] font-bold text-brand">
          오늘의집 무빙플래너
        </span>
        <h1 className="mt-5 text-[28px] font-extrabold leading-[1.32] tracking-tight text-ink">
          복잡한 이사 준비,
          <br />
          알아서 챙겨드려요
        </h1>

        <button
          type="button"
          onClick={onCtaClick}
          className="animate-cta-blink mx-auto mt-7 inline-flex h-14 w-[calc(100%-80px)] max-w-[310px] items-center justify-center gap-1 rounded-full border-2 border-transparent text-[17px] font-bold"
        >
          지금 무료로 견적 받기
          <ChevronRight className="size-4" />
        </button>

        <img
          src={movingCharacterAsset.url}
          alt="오늘의집 무빙플래너 캐릭터"
          loading="lazy"
          className="mx-auto mt-8 h-[180px] w-[180px] object-contain"
        />

        <p className="mt-7 text-[16px] font-bold text-ink">
          결혼엔 웨딩플래너, 이사엔 무빙플래너
        </p>
        <p className="mt-4 text-[14px] leading-[1.6] text-ink-sub">
          이사 준비, 제대로 아는 곳에 맡기고 싶다면
          <br />
          검증된 업체부터 일정까지 오늘의집 무빙플래너가 1:1로 챙겨드려요
        </p>

        {/* 서비스 아이콘 5종 */}
        <div className="mt-8 rounded-2xl border border-brand/50 bg-background px-3 py-5">
          <ul className="grid grid-cols-5 gap-1">
            {ICONS.map((item) => (
              <li key={item.label} className="flex flex-col items-center gap-2">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="size-9 object-contain"
                />
                <span className="whitespace-pre-line text-[11px] font-medium leading-[1.3] text-ink">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 혜택 3종 */}
        <ul className="mt-3 space-y-2.5">
          {BENEFITS.map(({ Icon, title, desc }) => (
            <li
              key={title}
              className="flex gap-3 rounded-2xl bg-background px-4 py-4 text-left"
            >
              <Icon className="mt-1 size-5 shrink-0 text-brand" />
              <div>
                <p className="text-[15px] font-bold text-ink">{title}</p>
                <p className="mt-1 text-[13px] leading-[1.5] text-ink-sub">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 채팅 섹션 */}
      <section className="px-5 py-12">
        <h2 className="text-[22px] font-extrabold leading-[1.35] text-ink">
          무빙플래너가 전부 대신 해드려요
        </h2>
        <p className="mt-3 text-[14px] leading-[1.6] text-ink-sub">
          막막한 이사준비, 이제 혼자 검색하지 않아도 돼요.
          <br />
          이제 무빙플래너에게 그냥 맡기세요.
        </p>

        <img
          src={kakaoChatAsset.url}
          alt="무빙플래너 채널 카카오톡 상담 예시"
          loading="lazy"
          className="mt-6 w-full rounded-2xl"
        />
      </section>

      {/* 일정표 섹션 */}
      <section className="bg-brand-softer px-5 py-12">
        <h2 className="text-[22px] font-extrabold leading-[1.35] text-ink">
          맞춤 일정표로, 놓치는 일 없이!
        </h2>
        <p className="mt-3 text-[14px] leading-[1.6] text-ink-sub">
          이사업체 견적부터 명의변경까지,
          <br />
          놓치기 쉬운 일들을 이사 날짜에 맞춰 알려드려요!
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <span className="text-[12px] font-bold text-brand">오늘의집 무빙플래너</span>
            <span className="text-[11px] text-ink-sub">상담중</span>
          </div>
          <div className="px-4 py-4">
            <p className="text-[15px] font-bold text-ink">나의 새집맞이 일정표</p>
            <p className="mt-1 text-[11px] text-ink-sub">
              시급하지 않아도 필요한 준비, 무빙플래너가 한눈에 정리해 드려요
            </p>

            <div className="mt-3 rounded-xl bg-brand-soft px-4 py-3">
              <div className="flex items-baseline gap-2">
                <span className="text-[26px] font-extrabold text-brand">D-59</span>
                <span className="text-[11px] text-ink-sub">
                  이사 예정일
                  <br />
                  8월 28일(금)
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-[12px]">
              <span className="text-ink-sub">신청 현황</span>
              <span className="font-bold text-brand">1 / 16 완료</span>
            </div>

            <div className="mt-3 rounded-xl border border-border p-3">
              <div className="flex items-center justify-between text-[11px] text-ink-sub">
                <span className="font-bold text-ink">🚚 서비스 예약·방문</span>
                <span>D-45 ~ D-29</span>
              </div>
              <div className="mt-3 flex gap-2">
                <span className="mt-0.5 size-4 shrink-0 rounded-full border border-border" />
                <div>
                  <p className="text-[10px] text-ink-sub">7월 19일(토) · D-59</p>
                  <p className="text-[13px] font-bold text-ink">이사 업체 견적 예약</p>
                  <p className="mt-1 text-[11px] leading-[1.5] text-ink-sub">
                    성수기엔 원하는 날짜가 빠르게 마감되니 미리 견적을 받아보세요
                  </p>
                  <button
                    type="button"
                    onClick={onCtaClick}
                    className="mt-2 inline-flex h-8 items-center rounded-lg bg-brand px-3 text-[12px] font-bold text-brand-foreground"
                  >
                    무료 견적받기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
