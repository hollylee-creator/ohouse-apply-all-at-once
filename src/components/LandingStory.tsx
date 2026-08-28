import kakaoChat from "@/assets/kakao-chat.png";
import movingCharacter from "@/assets/moving-character.png";
import scheduleMockup from "@/assets/schedule-mockup.png";
import iconShippingBox from "@/assets/icon-shipping-box.svg";
import iconInfoCircle from "@/assets/icon-info-circle.svg";
import iconMagnifyingGlass from "@/assets/icon-magnifying-glass.svg";
import iconCalendarIcon from "@/assets/icon-calendar.svg";
import iconBubbleChat from "@/assets/icon-bubble-chat.svg";
import iconInterior from "@/assets/icon-interior.png";
import iconMoving from "@/assets/icon-moving.png";
import iconCleaning from "@/assets/icon-cleaning.png";
import iconWifi from "@/assets/icon-wifi.png";
import iconWater from "@/assets/icon-water.png";

const ICONS = [
  { label: "인테리어\n시공", src: iconInterior, alt: "인테리어 시공 아이콘" },
  { label: "이사\n업체", src: iconMoving, alt: "이사 업체 아이콘" },
  { label: "입주\n청소", src: iconCleaning, alt: "입주 청소 아이콘" },
  { label: "인터넷\n설치", src: iconWifi, alt: "인터넷 설치 아이콘" },
  { label: "가전\n렌탈", src: iconWater, alt: "가전 렌탈 아이콘" },
];

const BENEFITS = [
  {
    icon: iconMagnifyingGlass,
    title: "이사 필수 서비스 대신 접수",
    desc: "인테리어 시공, 이사 업체, 입주 청소 등 필요한 서비스를\n대신 신청해드려요",
  },
  {
    icon: iconCalendarIcon,
    title: "이사 일정 관리",
    desc: "이사일에 맞춰 무엇을 준비할지 짚어드려요",
  },
  {
    icon: iconBubbleChat,
    title: "궁금한건 뭐든지",
    desc: "업체 선정 기준부터 이사 관련 궁금한 점까지, 편하게 물어보세요",
  },
];

export function LandingStory({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <div>
      {/* 안내 배너 — 피그마 노드 127:6770, bg #f2f4f6 / text #6c7180 */}
      <div className="px-4 pt-4">
        <div className="mx-auto w-full max-w-[430px]">
          <div className="mx-auto flex w-fit gap-[5px] rounded-[8px] bg-[#f2f4f6] py-3 pl-3 pr-4 text-[12px] font-semibold leading-[16px] text-[#6c7180]">
            <img
              src={iconInfoCircle}
              alt=""
              aria-hidden
              loading="lazy"
              className="mt-0.5 size-[17px] shrink-0"
            />
            <p className="whitespace-pre-line">
              이사 예정 고객님께만 드리는 안내예요.{"\n"}
              나가시면 다시 보실 수 없어요. 잊지 않도록 스크랩해 두세요.
            </p>
          </div>
        </div>
      </div>

      {/* 히어로 */}
      <section className="bg-gradient-to-b from-background via-brand-softer to-brand-soft/60 pb-10 pt-10 text-center">
        <div className="mx-auto w-full max-w-[430px] px-5">
          {/* 배지 — 피그마 노드 127:6767, bg white / border #0aa5ff / text #0aa5ff */}
          <div className="mx-auto flex h-[26px] w-fit items-center justify-center gap-[5px] rounded-[12px] border-[0.75px] border-[#0aa5ff] bg-white px-3 py-1">
            <img
              src={iconShippingBox}
              alt=""
              aria-hidden
              loading="lazy"
              className="size-4"
            />
            <span className="text-[12px] font-bold text-[#0aa5ff]">오늘의집 무빙플래너</span>
          </div>

          {/* 히어로 타이틀 — 피그마 노드 127:6766, 30px/40px Bold #17171c */}
          <h1 className="mt-5 text-[30px] font-bold leading-[40px] tracking-[-0.6px] text-[#17171c]">
            복잡한 이사 준비,
            <br />
            알아서 챙겨드려요
          </h1>

          {/* CTA — 피그마 노드 127:6773, bg #1c8efa / radius 11.216px / h49 w210 */}
          <button
            type="button"
            onClick={onCtaClick}
            className="animate-cta-blink mx-auto mt-7 flex h-[56px] w-[240px] items-center justify-center rounded-[12px] border-2 border-transparent bg-[#1c8efa] px-6 text-[17px] font-semibold tracking-[-0.24px] text-white"
          >
            지금 무료로 견적 받기
            <span className="ml-2">&gt;</span>
          </button>

          <img
            src={movingCharacter}
            alt="오늘의집 무빙플래너 캐릭터"
            loading="lazy"
            className="mx-auto mt-8 h-[152px] w-[152px] object-contain"
          />

          {/* 서브 타이틀 — 피그마 노드 127:6764/6763, #121212 14px Bold + #5b6577 12px */}
          <p className="mt-7 text-[14px] font-bold tracking-[-0.28px] text-[#121212]">
            결혼엔 웨딩플래너, 이사엔 무빙플래너
          </p>
          <p className="mt-4 text-[12px] leading-[18px] tracking-[-0.24px] text-[#5b6577]">
            이사 준비, 제대로 아는 곳에 맡기고 싶다면
            <br />
            검증된 업체부터 일정까지 <span className="font-bold">오늘의집 무빙플래너가 1:1로 챙겨드려요</span>
          </p>

          {/* 서비스 아이콘 5종 — 피그마 노드 127:6776, 카드 343px / 아이콘 줄 311px 고정폭 */}
          <div className="mx-auto mt-8 w-[343px] rounded-[8px] border border-[#00a1ff] bg-[#f8faff] p-3">
            <ul className="mx-auto flex w-[311px] items-center justify-between">
              {ICONS.map((item) => (
                <li key={item.label} className="flex w-[66px] flex-col items-center">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="size-9 object-contain"
                  />
                  <span className="whitespace-pre-line text-[12px] leading-[16px] tracking-[-0.3px] text-[#141414]">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 혜택 3종 — 피그마 노드 127:6797, bg #f8faff / 아이콘칩 bg white / title #141414 / desc #8c8c8c */}
          <ul className="mx-auto mt-2 w-[343px] space-y-2">
            {BENEFITS.map(({ icon, title, desc }) => (
              <li
                key={title}
                className="flex items-center gap-3 rounded-[8px] bg-[#f8faff] p-3 text-left"
              >
                <span className="flex shrink-0 items-center justify-center rounded-[8px] bg-white p-2">
                  <img src={icon} alt="" aria-hidden loading="lazy" className="size-5" />
                </span>
                <div>
                  <p className="text-[14px] font-semibold leading-[20px] tracking-[-0.3px] text-[#141414]">{title}</p>
                  <p className="whitespace-pre-line text-[13px] leading-[18px] tracking-[-0.3px] text-[#8c8c8c]">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 채팅 섹션 — 피그마 노드 127:6818, 타이틀 20px Bold / 서브 14px opacity-60 */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-[430px] px-5">
          <h2 className="text-[20px] font-bold leading-[28px] tracking-[-0.3px] text-black">
            무빙플래너가 전부 대신 해드려요
          </h2>
          <p className="mt-1 text-[14px] leading-[20px] tracking-[-0.3px] text-black/60">
            막막한 이사준비, 이제 혼자 검색하지 않아도 돼요.
            <br />
            이제 무빙플래너에게 그냥 맡기세요.
          </p>

          <img
            src={kakaoChat}
            alt="무빙플래너 채널 카카오톡 상담 예시"
            loading="lazy"
            className="mx-auto mt-6 w-[280px] rounded-[12px]"
          />
        </div>
      </section>

      {/* 일정표 섹션 */}
      <section className="py-12">
        <div className="mx-auto w-full max-w-[430px] px-5">
          <h2 className="text-[20px] font-bold leading-[28px] tracking-[-0.3px] text-black">
            맞춤 일정표로, 놓치는 일 없이!
          </h2>
          <p className="mt-1 text-[14px] leading-[20px] tracking-[-0.3px] text-black/60">
            이사업체 견적부터 명의변경까지,
            <br />
            놓치기 쉬운 일들을 이사 날짜에 맞춰 알려드려요!
          </p>

          {/* 일정표 목업 — 페이드아웃 포함된 이미지 그대로 사용, 좌우 패딩 상쇄해 화면 폭 꽉 채움 */}
          <img
            src={scheduleMockup}
            alt="맞춤 일정표 미리보기"
            loading="lazy"
            className="-mx-5 mt-6 w-[calc(100%+40px)]"
          />
        </div>
      </section>
    </div>
  );
}
