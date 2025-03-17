
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Updated colors for Wz WebDezign with blue and white theme
				"wz-blue": "#1EAEDB",
				"wz-blue-light": "#33C3F0",
				"wz-blue-dark": "#0A6F8D", // Darker blue for better contrast
				"wz-white": "#FFFFFF",
				"wz-gray-light": "#F5F5F5",
				"wz-dark": "#333333", // Darker text color for better contrast
				"wz-black": "#121212",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0", opacity: "0" },
					to: { height: "var(--radix-accordion-content-height)", opacity: "1" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
					to: { height: "0", opacity: "0" }
				},
				// Custom animations
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"slide-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(100px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"slide-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-100px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"slide-left": {
					"0%": {
						opacity: "0",
						transform: "translateX(100px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)"
					}
				},
				"slide-right": {
					"0%": {
						opacity: "0",
						transform: "translateX(-100px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)"
					}
				},
				"scale-in": {
					"0%": {
						opacity: "0",
						transform: "scale(0.9)"
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)"
					}
				},
				"pulse-slow": {
					"0%, 100%": {
						opacity: "1"
					},
					"50%": {
						opacity: "0.8"
					}
				},
				"float": {
					"0%, 100%": {
						transform: "translateY(0)"
					},
					"50%": {
						transform: "translateY(-10px)"
					}
				},
				"glow": {
					"0%, 100%": {
						boxShadow: "0 0 5px rgba(14, 165, 233, 0.5), 0 0 20px rgba(14, 165, 233, 0.3)"
					},
					"50%": {
						boxShadow: "0 0 15px rgba(14, 165, 233, 0.8), 0 0 30px rgba(14, 165, 233, 0.5)"
					}
				},
				"rotate-slow": {
					"0%": {
						transform: "rotate(0deg)"
					},
					"100%": {
						transform: "rotate(360deg)"
					}
				},
				"bounce-subtle": {
					"0%, 100%": {
						transform: "translateY(0)"
					},
					"50%": {
						transform: "translateY(-5px)"
					}
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.7s ease-out forwards",
				"slide-up": "slide-up 0.7s ease-out forwards",
				"slide-down": "slide-down 0.7s ease-out forwards",
				"slide-left": "slide-left 0.7s ease-out forwards",
				"slide-right": "slide-right 0.7s ease-out forwards",
				"scale-in": "scale-in 0.7s ease-out forwards",
				"pulse-slow": "pulse-slow 3s infinite",
				"float": "float 6s ease-in-out infinite",
				"glow": "glow 2s infinite",
				"rotate-slow": "rotate-slow 12s linear infinite",
				"bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"blue-gradient": "linear-gradient(90deg, #0A6F8D, #1EAEDB)", // Darker to lighter blue for better contrast
				"blue-purple-gradient": "linear-gradient(90deg, #0A6F8D, #6E59A5)",
				"blue-white-gradient": "linear-gradient(90deg, #0A6F8D, #1EAEDB)", // Changed to blue gradient for better visibility
				"dark-gradient": "linear-gradient(to bottom, #121212, #1A1F2C)",
			},
			boxShadow: {
				"neon-blue": "0 0 5px rgba(30, 174, 219, 0.5), 0 0 20px rgba(30, 174, 219, 0.3)",
				"neon-white": "0 0 5px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)",
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
