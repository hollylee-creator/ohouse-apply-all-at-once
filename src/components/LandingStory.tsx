import { Info, Search, Calendar, MessageSquare, ChevronRight, Gift } from "lucide-react";
import kakaoChatAsset from "@/assets/kakao-chat.png.asset.json";
import movingCharacterAsset from "@/assets/moving-character.png.asset.json";
import movingPlannerBadgeAsset from "@/assets/moving-planner-badge.svg.asset.json";
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

        {/* 일정표 목업 — 상단만 보이고 아래로 페이드아웃 */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
          <div className="px-4 pb-10 pt-4">
            {/* 상단 헤더 */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-full border border-brand px-2.5 py-1 text-[11px] font-bold text-brand">
                <span className="flex size-3.5 items-center justify-center rounded-sm bg-brand text-[8px] font-extrabold text-brand-foreground">
                  ㅇ
                </span>
                오늘의집 무빙플래너
              </span>
              <span className="inline-flex items-center rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-bold text-brand">
                상담전
              </span>
            </div>

            {/* 타이틀 */}
            <p className="mt-4 text-[22px] font-extrabold tracking-tight text-ink">
              나의 <span className="text-brand">새집맞이 일정표</span>
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-[26px] font-extrabold text-brand">D-20</span>
              <span className="text-[13px] font-bold text-ink">9월 16일(수)</span>
            </div>

            {/* 전체 진행바 */}
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[35%] rounded-full bg-brand" />
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[12px]">
              <span className="text-ink-sub">진행 상황</span>
              <span className="font-bold text-ink">
                <span className="text-brand">6</span> / 17 완료
              </span>
            </div>

            {/* 무빙플래너 대행 */}
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <span className="text-[13px] font-bold text-ink">
                무빙플래너 대행 <span className="text-brand">1/3</span>
              </span>
              <span className="text-[10px] text-ink-sub">
                신청 전 · 신청완료 · 매칭중 · 매칭완료
              </span>
            </div>

            <ul className="mt-3 space-y-3">
              <li>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[13px] text-ink">
                    <span className="size-4 rounded border border-border" />
                    청소 견적 신청하기
                  </span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                    매칭완료
                  </span>
                </div>
                <div className="mt-1.5 flex gap-1">
                  <span className="h-1.5 flex-1 rounded-full bg-emerald-500" />
                  <span className="h-1.5 flex-1 rounded-full bg-emerald-500" />
                  <span className="h-1.5 flex-1 rounded-full bg-emerald-500" />
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[13px] text-ink">
                    <span className="size-4 rounded border border-border" />
                    종합시공 견적 신청하기
                  </span>
                  <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-bold text-brand">
                    매칭대기
                  </span>
                </div>
                <div className="mt-1.5 flex gap-1">
                  <span className="h-1.5 flex-1 rounded-full bg-brand" />
                  <span className="h-1.5 flex-1 rounded-full bg-muted" />
                  <span className="h-1.5 flex-1 rounded-full bg-muted" />
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[13px] text-ink">
                    <span className="text-brand">✳</span>
                    오늘의집 시공 견적 신청하기
                  </span>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold text-ink-sub">
                    신청 전
                  </span>
                </div>
                <div className="mt-1.5 flex gap-1">
                  <span className="h-1.5 flex-1 rounded-full bg-muted" />
                  <span className="h-1.5 flex-1 rounded-full bg-muted" />
                  <span className="h-1.5 flex-1 rounded-full bg-muted" />
                </div>
              </li>
            </ul>

            {/* 직접 진행 */}
            <div className="mt-4 flex items-center justify-between rounded-xl bg-orange-50 px-4 py-3">
              <span className="text-[13px] font-bold text-ink">
                직접 진행 <span className="text-orange-500">5/14</span>
              </span>
              <span className="flex items-center text-[12px] font-bold text-orange-500">
                전체보기
                <ChevronRight className="size-3.5" />
              </span>
            </div>

            {/* 완주 보너스 */}
            <div className="mt-2.5 flex items-center gap-2 rounded-xl bg-muted px-4 py-3.5 text-[13px] font-medium text-ink-sub">
              <Gift className="size-4" />
              완주 보너스
              <span className="text-ink-sub/60">?</span>
            </div>

            {/* 대행 진행 카드 (일부만 노출) */}
            <div className="mt-4 rounded-2xl bg-brand-soft p-4">
              <span className="inline-flex rounded-md bg-brand px-1.5 py-0.5 text-[10px] font-extrabold text-brand-foreground">
                대행
              </span>
              <p className="mt-1.5 text-[15px] font-bold text-ink">
                무빙플래너가 대신 진행 중이에요
              </p>
              <p className="mt-1 text-[12px] leading-[1.5] text-ink-sub">
                신청하신 서비스의 진행 상태예요. 매칭 상태는 무빙플래너가 관리해요.
              </p>
              <div className="mt-3 rounded-xl border-l-4 border-emerald-500 bg-background px-4 py-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-bold text-ink">청소 견적 신청하기</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                    매칭완료
                  </span>
                </div>
                <p className="mt-1 text-[12px] text-ink-sub">매칭이 끝났어요.</p>
              </div>
            </div>
          </div>

          {/* 페이드아웃 오버레이 */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </div>
      </section>
    </div>
  );
}
