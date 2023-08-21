/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "hd-xl-desktop": ["3.5rem", { lineHeight: 1, fontWeight: 800 }],
        "hd-xl": ["2.5rem", { lineHeight: 1, fontWeight: 800 }],
        "hd-lg-desktop": ["2.5rem", { lineHeight: 1, fontWeight: 700 }],
        "hd-lg": ["2rem", { lineHeight: 1, fontWeight: 700 }],
        "hd-md": ["2rem", { lineHeight: 1, fontWeight: 700 }],
        "hd-sm": ["1.25rem", { lineHeight: 1.2, fontWeight: 800 }],
        "hd-xs": ["1.125rem", { lineHeight: 1.33, fontWeight: 800 }],
        "nav-links": ["1.125rem", { lineHeight: 1.33, fontWeight: 400 }],
        body: ["0.9375rem", { lineHeight: 1.73, fontWeight: 400 }],
        "small-caps": ["0.875rem", { lineHeight: 1.71, fontWeight: 700 }],
      },
      colors: {
        "brand-off-white": "hsl(var(--clr-brand-off-white), <alpha-value>)",
        "brand-silver": "hsl(var(--clr-brand-silver), <alpha-value>)",
        "brand-yellow": "hsl(var(--clr-brand-yellow), <alpha-value>)",
        "brand-dark-blue": "hsl(var(--clr-brand-dark-blue), <alpha-value>)",
        "brand-gunmetal": "hsl(var(--clr-brand-gunmetal), <alpha-value>)",
        "brand-vermillion": "hsl(var(--clr-brand-vermillion), <alpha-value)",
      },
    },
  },
  plugins: [],
};
