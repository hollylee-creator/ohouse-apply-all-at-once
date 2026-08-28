import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// 순수 정적 SPA 빌드 설정 (TanStack Start SSR/서버 함수 제거).
// O!Ligo Phase 1/2(정적 HTML/빌드된 SPA)에 그대로 올릴 수 있도록
// 서버 런타임 의존성 없이 `vite build` 결과물(dist/)만으로 동작합니다.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist",
  },
});
