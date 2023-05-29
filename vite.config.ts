import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "/src/scss/variables.scss";
          @import "/node_modules/bulma/sass/utilities/mixins.sass";
        `,
      },
    },
  },
});
