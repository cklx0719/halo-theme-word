/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');
module.exports = {
  content: ["./templates/**/*.html", "./src/main.ts"],
  theme: {
    extend: {
      fontFamily: {
        songti: ['SimSun', 'serif'],
        fangSong: ['FangSong', 'serif'],
        heiti: ['SimHei', 'sans-serif'],
        kaiti: ['KaiTi', 'serif'],
      },
      spacing: {
        'a4-width': '210mm',
        'a4-height': '297mm',
      },
      fontSize: {
        // 中文印刷字号
        'size-1': '42pt', // 1号字
        'size-2': '36pt', // 2号字
        'size-3': '21pt', // 3号字
        'size-4': '18pt', // 4号字
        'size-5': '15.75pt', // 5号字
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    addDynamicIconSelectors(),
  ],
  safelist: [
    "prose-sm",
    "prose-base",
    "prose-lg",
    "prose-xl",
    "prose-2xl",
    "prose-gray",
    "prose-slate",
    "prose-zinc",
    "prose-neutral",
    "prose-stone",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-base",
    "text-lg",
    "text-size-1",
    "text-size-2",
    "text-size-3",
    "text-size-4",
    "text-size-5",
    "font-songti",
    "font-fangSong",
    "font-heiti",
    "font-kaiti",
    "word-headings-default",
    "word-headings-bold",
    "word-headings-same",
  ],
};
