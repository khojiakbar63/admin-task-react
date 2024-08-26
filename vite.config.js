import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath} from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@components",
        replacement: fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
      },
      {
        find: "@ui",
        replacement: fileURLToPath(
          new URL("./src/components/ui", import.meta.url)
        ),
      },
      {
        find: "@layouts",
        replacement: fileURLToPath(
          new URL("./src/components/layouts", import.meta.url)
        ),
      },
      
      {
        find: "@images",
        replacement: fileURLToPath(
          new URL("./src/assets/images", import.meta.url)
        ),
      },
      {
        find: "@icons",
        replacement: fileURLToPath(
          new URL("./src/assets/icons", import.meta.url)
        ),
      },
      {
        find: "@mocks",
        replacement: fileURLToPath(new URL("./src/mocks", import.meta.url)),
      },
      {
        find: "@entrance-layout",
        replacement: fileURLToPath(new URL("./src/entrance-layout", import.meta.url)),
      },
      {
        find: "@pages",
        replacement: fileURLToPath(new URL("./src/pages", import.meta.url)),
      },
      {
        find: "@form",
        replacement: fileURLToPath(new URL("./src/form", import.meta.url)),
      },
   
    ],
  },
})
