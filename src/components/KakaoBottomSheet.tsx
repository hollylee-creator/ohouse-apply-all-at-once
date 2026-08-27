import { X, MousePointer2 } from "lucide-react";

const KAKAO_CHAT_URL = "https://pf.kakao.com/_ZzexfX/chat";

// 관리자가 나중에 수정할 수 있도록 상수로 분리
const RECENT_CHAT_COUNT = 34;

export function KakaoBottomSheet({
  open,
  name,
  onClose,
}: {
  open: boolean;
  name: string;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        className="absolute inset-0 bg-foreground/50 animate-in fade-in"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        className="relative flex max-h-[92svh] w-full max-w-[430px] flex-col rounded-t-3xl bg-background animate-in slide-in-from-bottom duration-300"
      >
        <div className="flex items-center px-4 pt-4">
          <button type="button" onClick={onClose} aria-label="닫기" className="p-1">
            <X className="size-6 text-ink" />
          </button>
        </div>
        <div className="h-1 w-full bg-brand" />

        <div className="flex-1 overflow-y-auto px-5 pb-6 pt-7">
          <h2 className="text-center text-[22px] font-extrabold leading-snug">
            <span className="block text-brand">채팅방으로 이동하여</span>
            <span className="block text-ink">이 버튼을 누르면 완료돼요!</span>
          </h2>
          <p className="mt-4 text-center text-[14px] leading-relaxed text-ink-sub">
            카카오톡은 무빙플래너가 먼저 말을 걸 수 없어요.
            <br />첫 메시지를 보내주시면 순서대로 상담해드려요.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl bg-muted">
            <div className="flex items-center gap-2 bg-black/5 px-4 py-3">
              <span className="text-ink-sub">‹</span>
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden />
              <span className="text-[15px] font-bold text-ink">오늘의집 무빙플래너</span>
            </div>
            <div className="flex flex-col items-center px-4 pb-4 pt-6">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-background shadow-sm">
                <span className="block size-8 rounded-full bg-brand" aria-hidden />
              </div>
              <p className="mt-3 text-[17px] font-bold text-ink-sub">대화를 시작해 보세요</p>
              <p className="mt-1 text-[13px] text-ink-sub/80">
                최근 한달 간 {RECENT_CHAT_COUNT}명과 채팅했어요
              </p>
              <div className="relative mt-4 rounded-full border-2 border-brand bg-background px-6 py-3">
                <span className="text-[16px] font-bold text-ink">문의드려도 될까요?</span>
                <MousePointer2 className="absolute -bottom-2 right-1 size-5 rotate-12 fill-background text-ink" />
              </div>
              <div className="mt-5 w-full rounded-full bg-background px-5 py-3 text-[14px] text-ink-sub/60">
                메시지 입력
              </div>
            </div>
          </div>

          <div className="mt-7">
            <h3 className="text-[16px] font-bold text-ink">신청 정보</h3>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
              <span className="text-[14px] text-ink-sub">이름</span>
              <span className="text-[14px] font-semibold text-ink">{name}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border bg-background px-5 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-3">
          <a
            href={KAKAO_CHAT_URL}
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-full items-center justify-center rounded-xl bg-foreground text-[16px] font-bold text-background"
          >
            카카오톡으로 상담 시작하기
          </a>
        </div>
      </div>
    </div>
  );
}
