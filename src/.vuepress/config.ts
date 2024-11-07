import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Hdorr-hope-doc",

  lang: "zh-CN",
  title: "HDorr-Blog",
  description: "HDorr-Blog 的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
