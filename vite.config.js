import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

//Load environment variables
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
