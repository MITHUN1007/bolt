import type { Config } from "tailwindcss";

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        // Basic Tailwind colors
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          500: '#6b7280',
          600: '#4b5563',
          800: '#1f2937',
          900: '#111827',
          950: '#030712'
        },
        white: '#ffffff',
        green: {
          400: '#4ade80',
          500: '#22c55e'
        },
        red: {
          400: '#f87171',
          500: '#ef4444'
        },
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        },
        // Alpha colors for Bolt.new
        alpha: {
          gray: {
            2: 'rgba(0, 0, 0, 0.02)',
            5: 'rgba(0, 0, 0, 0.05)',
            10: 'rgba(0, 0, 0, 0.1)',
            30: 'rgba(0, 0, 0, 0.3)',
            50: 'rgba(0, 0, 0, 0.5)',
            80: 'rgba(0, 0, 0, 0.8)'
          },
          white: {
            5: 'rgba(255, 255, 255, 0.05)',
            10: 'rgba(255, 255, 255, 0.1)',
            50: 'rgba(255, 255, 255, 0.5)',
            80: 'rgba(255, 255, 255, 0.8)'
          },
          accent: {
            10: 'rgba(59, 130, 246, 0.1)',
            20: 'rgba(59, 130, 246, 0.2)',
            30: 'rgba(59, 130, 246, 0.3)'
          },
          red: {
            10: 'rgba(239, 68, 68, 0.1)',
            20: 'rgba(239, 68, 68, 0.2)'
          }
        },
        // Bolt.new theme colors with fallbacks
        accent: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;