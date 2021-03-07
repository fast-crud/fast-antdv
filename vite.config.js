import vue from "@vitejs/plugin-vue";
import path from "path";
import visualizer from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default {
  plugins: [
    vue(),
  ],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  resolve: {
    alias: {
      "/antdv": path.resolve("./node_modules/ant-design-vue"),
      "/@": path.resolve("./src")
    },
    dedupe: ["vue"]
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "lazy-antdv",
    },
    sourcemap: true,
    // minify: false,
    rollupOptions: {
      plugins: [visualizer()],
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue", "ant-design-vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
          "ant-design-vue": "Antd"
        },
      },
    },
  },
};
