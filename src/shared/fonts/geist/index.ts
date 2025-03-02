import localFont from "next/font/local";

export const geist = localFont({
  variable: "--font-geist",
  display: "swap",
  style: "normal",
  src: [
    {
      path: "./geist-v1-latin_latin-ext-100.woff2",
      weight: "100",
    },
    {
      path: "./geist-v1-latin_latin-ext-200.woff2",
      weight: "200",
    },
    {
      path: "./geist-v1-latin_latin-ext-300.woff2",
      weight: "300",
    },
    {
      path: "./geist-v1-latin_latin-ext-regular.woff2",
      weight: "400",
    },
    {
      path: "./geist-v1-latin_latin-ext-500.woff2",
      weight: "500",
    },
    {
      path: "./geist-v1-latin_latin-ext-600.woff2",
      weight: "600",
    },
    {
      path: "./geist-v1-latin_latin-ext-700.woff2",
      weight: "700",
    },
    {
      path: "./geist-v1-latin_latin-ext-800.woff2",
      weight: "800",
    },
    {
      path: "./geist-v1-latin_latin-ext-900.woff2",
      weight: "900",
    },
  ],
});
