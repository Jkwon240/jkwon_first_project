import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/jkwon_first_project/", // GitHub 저장소 이름과 정확히 일치
  plugins: [react()],
});
