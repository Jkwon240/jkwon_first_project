import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/jkwon_first_project/", // ✅ 리포지토리 이름을 정확히 입력!
  plugins: [react()],
});
