/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			// fontFamily: {
			// 	panton: {
			// 		DEFAULT: ["Panton-Trial-Regular", "sans-serif"],
			// 		black: ["Panton-Trial-Black", "sans-serif"],
			// 		bold: ["Panton-Trial-Bold", "sans-serif"],
			// 		light: ["Panton-Trial-Light", "sans-serif"],
			// 	},
			// },
			fontSize: {
				"r5-title": "clamp(2rem, 10vw, 3.15rem)",
			},
			backgroundImage: {
				"main-pattern":
					"linear-gradient(to top, rgba(8, 8, 8, 1), rgba(8, 8, 8, 0)), url(/img/bg.jpg)",
			},
			animation: {
				"animate-fade-in": "opacity-0 animate-fade-in",
				"animate-down":
					"opacity-0 translate-y-[-35px] animate-float-down-fade-in",
			},
			keyframes: {
				"float-down-fade-in": {
					"0%": {
						opacity: 0,
						transform: "translateY(-35px)",
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0)",
					},
				},
				"fade-in": {
					"0%": {
						opacity: 0,
						transform: "scale(0.75)",
					},
					"100%": {
						opacity: 1,
						transform: "scale(1)",
					},
				},
			},
		},
	},
	plugins: [],
};
