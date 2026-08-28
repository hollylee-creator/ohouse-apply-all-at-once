# One Stop Service Hub

오늘의집 "한번에 신청하기" 랜딩 페이지를 새로 만들어줘.



[디자인 원칙]

- 첨부한 스크린샷은 기존 오늘의집 "한번에 신청하기" 화면이야. 

  레이아웃 구조, 카드/버튼 스타일, 여백, 타이포그래피, 색상 톤을 최대한 동일하게 재현해줘.

  새로운 디자인 시스템을 만들지 말고, 스크린샷 속 컴포넌트 스타일을 그대로 참고해서 확장해줘.

- 메인 컬러는 오늘의집 브랜드 컬러( #0AA5FF) 기준으로 톤온톤 variation 혹은 통일

- 폰트는 Pretendard 사용

- 모바일 퍼스트(390px 기준)로 설계하고, 상단 여백/카드 radius/버튼 높이 등은 스크린샷의 비율감을 유지



[페이지 목적]

이사·청소·인테리어·인터넷·가전렌탈 서비스 중 관심 있는 서비스를

한 번에 신청할 수 있도록 정보를 수집하는 단일 랜딩 페이지야.



[페이지 구성]

1. 상단 히어로 영역

   - 카피: “복잡한 이사 준비, 알아서 챙겨드려요” 

   - 서브카피: “필요한 서비스만 고르면 전담 플래너가 상담부터 접수까지 대신 해드려요”

2. 신청 폼 (한 페이지 스크롤형, 현재 첨부한 스크린샷 랜딩 하단에 해당 폼만 첨부되면 됨)

   - 성함 (텍스트 입력, 필수)

   - 연락처 (전화번호 입력, 필수, 숫자만/하이픈 자동 포맷)

   - 관심 있는 서비스 (체크박스, 복수 선택 가능, 필수 최소 1개)

     ㄴ 집 전체 시공

     ㄴ 부분 시공

     ㄴ 이사 업체

     ㄴ 인터넷 설치

     ㄴ 가전 렌탈

   - 각 체크박스는 카드형 (선택 시 브랜드 컬러로 하이라이트)로, 텍스트 체크박스가 아니라 탭 가능한 큰 영역으로 만들어줘 (모바일 터치 편의성)

3. 하단 고정 CTA 버튼: “무료로 견적 받기” (선택된 서비스가 1개 이상일 때만 활성화)

4. 폼 제출 완료 시, 하단에서 올라오는 바텀시트(팝업) 형태로 아래 구성을 띄워줘.

   전체 화면을 덮지 않고, 아래에서 슬라이드업되는 모달로 구현해줘.



   [팝업 구성 - 위에서 아래 순서]

   - 상단 타이틀 (2줄, 브랜드 블루 컬러, 굵게 강조):

     "채팅방으로 이동하여

      이 버튼을 누르면 완료돼요!"

   - 안내 문구 (회색 톤, 작은 텍스트):

     "카카오톡은 무빙플래너가 먼저 말을 걸 수 없어요.

      첫 메시지를 보내주시면 순서대로 상담해드려요."

   - 카카오톡 채팅방 미리보기 카드 (회색 배경 카드, 스크린샷 참고):

     ㄴ 상단: "오늘의집 무빙플래너" 채널명 + 초록 점(온라인 표시)

     ㄴ 중앙: 오늘의집 로고 원형 아이콘

     ㄴ "대화를 시작해 보세요" + "최근 한달 간 34명과 채팅했어요" (숫자는 더미/변수 처리, 실제 값은 나중에 관리자가 수정 가능하게)

     ㄴ 말풍선 버튼: "문의드려도 될까요?" (커서/터치 아이콘 강조)

     ㄴ 하단: 비활성화된 "메시지 입력" 텍스트 필드 (실제 입력 불가, 시각적 목업)

   - "신청 정보" 섹션 (팝업 하단):

     ㄴ 라벨 "이름" + 사용자가 입력한 성함 값을 그대로 노출

   - 하단 고정 CTA 버튼: "카카오톡으로 상담 시작하기" (검정 배경, 흰 텍스트, full width)

     ㄴ 버튼 클릭 시 새 탭/딥링크로 이동: https://pf.kakao.com/_ZzexfX/chat

     ㄴ 이 딥링크는 오늘의집 무빙플래너 카카오톡 채널 채팅방으로 바로 연결되는 링크야



   이 팝업은 신청 폼 제출 성공 직후에만 뜨고, 배경(딤 처리)을 탭하거나 X 버튼으로 닫을 수 있게 해줘.



[기능 요구사항]

- 폼 제출 시 데이터가 Google Sheets에 적재될 수 있도록 개발

- 연락처는 숫자 유효성 검사 포함



기존 한번에 신청하기 화면과 최대한 톤앤매너가 일치하도록, 새로 만드는 느낌이 아니라

"같은 서비스의 다른 화면"처럼 보이게 만드는 게 최우선 목표야.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ohouse-apply-all-at-once.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/588624d7-8c8b-4d31-af75-8db69e894848).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
