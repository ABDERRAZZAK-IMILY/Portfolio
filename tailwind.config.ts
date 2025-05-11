
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Portfolio specific colors
				'space': '#0a192f',
				'space-secondary': '#172a45',
				'accent-teal': '#64ffda',
				'text-primary': '#ccd6f6',
				'text-secondary': '#8892b0',
			},
			fontFamily: {
				'space-mono': ['"Space Mono"', 'monospace'],
				'orbitron': ['"Orbitron"', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				'shooting': {
					'0%': {
						transform: 'translateX(-100px) translateY(50px) rotate(45deg)',
						opacity: '1',
					},
					'70%': { opacity: '1' },
					'100%': {
						transform: 'translateX(calc(100vw + 300px)) translateY(calc(-100vh - 300px)) rotate(45deg)',
						opacity: '0',
					},
				},
				'glitch-animation-1': {
					'0%': { clip: 'rect(36px, 9999px, 9px, 0)' },
					'5%': { clip: 'rect(85px, 9999px, 29px, 0)' },
					'10%': { clip: 'rect(32px, 9999px, 92px, 0)' },
					'15%': { clip: 'rect(40px, 9999px, 61px, 0)' },
					'20%': { clip: 'rect(35px, 9999px, 5px, 0)' },
					'25%': { clip: 'rect(96px, 9999px, 69px, 0)' },
					'30%': { clip: 'rect(27px, 9999px, 99px, 0)' },
					'35%': { clip: 'rect(2px, 9999px, 46px, 0)' },
					'40%': { clip: 'rect(17px, 9999px, 41px, 0)' },
					'45%': { clip: 'rect(57px, 9999px, 72px, 0)' },
					'50%': { clip: 'rect(52px, 9999px, 95px, 0)' },
					'55%': { clip: 'rect(81px, 9999px, 89px, 0)' },
					'60%': { clip: 'rect(15px, 9999px, 7px, 0)' },
					'65%': { clip: 'rect(20px, 9999px, 54px, 0)' },
					'70%': { clip: 'rect(60px, 9999px, 18px, 0)' },
					'75%': { clip: 'rect(89px, 9999px, 8px, 0)' },
					'80%': { clip: 'rect(98px, 9999px, 49px, 0)' },
					'85%': { clip: 'rect(19px, 9999px, 37px, 0)' },
					'90%': { clip: 'rect(94px, 9999px, 59px, 0)' },
					'95%': { clip: 'rect(82px, 9999px, 96px, 0)' },
					'100%': { clip: 'rect(73px, 9999px, 12px, 0)' },
				},
				'glitch-animation-2': {
					'0%': { clip: 'rect(12px, 9999px, 67px, 0)' },
					'5%': { clip: 'rect(35px, 9999px, 73px, 0)' },
					'10%': { clip: 'rect(28px, 9999px, 12px, 0)' },
					'15%': { clip: 'rect(69px, 9999px, 15px, 0)' },
					'20%': { clip: 'rect(13px, 9999px, 57px, 0)' },
					'25%': { clip: 'rect(36px, 9999px, 3px, 0)' },
					'30%': { clip: 'rect(67px, 9999px, 97px, 0)' },
					'35%': { clip: 'rect(38px, 9999px, 92px, 0)' },
					'40%': { clip: 'rect(60px, 9999px, 11px, 0)' },
					'45%': { clip: 'rect(28px, 9999px, 81px, 0)' },
					'50%': { clip: 'rect(54px, 9999px, 30px, 0)' },
					'55%': { clip: 'rect(24px, 9999px, 7px, 0)' },
					'60%': { clip: 'rect(78px, 9999px, 26px, 0)' },
					'65%': { clip: 'rect(47px, 9999px, 94px, 0)' },
					'70%': { clip: 'rect(22px, 9999px, 11px, 0)' },
					'75%': { clip: 'rect(83px, 9999px, 44px, 0)' },
					'80%': { clip: 'rect(31px, 9999px, 16px, 0)' },
					'85%': { clip: 'rect(46px, 9999px, 75px, 0)' },
					'90%': { clip: 'rect(49px, 9999px, 69px, 0)' },
					'95%': { clip: 'rect(95px, 9999px, 52px, 0)' },
					'100%': { clip: 'rect(13px, 9999px, 81px, 0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'shooting': 'shooting 5s linear infinite',
				'glitch-1': 'glitch-animation-1 2s infinite linear alternate-reverse',
				'glitch-2': 'glitch-animation-2 2s infinite linear alternate-reverse',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
