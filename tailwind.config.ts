import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark Theme Palette — reflet-brand-tokens.md
        background: '#0b0b0b',
        surface: '#111111',
        'surface-elevated': '#1a1a1a',
        border: 'rgba(255,255,255,0.1)',
        'border-subtle': 'rgba(255,255,255,0.08)',
        'border-hover': 'rgba(255,255,255,0.18)',
        
        // Text colors
        'text-primary': '#ffffff',
        'text-secondary': '#9a9a9a',
        'text-muted': '#636363',
        
        // Brand — Jaune soufre
        brand: {
          DEFAULT: '#c9ab1e',
          hover: '#b89a18',
          accent: '#f2d94e',
        },
        'on-brand': '#0b0b0b',
        success: '#22c55e',
        warning: '#b06b1c',
        'warning-text': '#e0a15c',
        danger: '#ef4444',
        info: '#3b82f6',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
      },
      borderRadius: {
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      fontSize: {
        'display': 'clamp(3rem, 5vw, 4.5rem)',
        'h1': 'clamp(2.25rem, 4vw, 3rem)',
        'h2': 'clamp(1.875rem, 3vw, 2.25rem)',
        'h3': 'clamp(1.5rem, 2.5vw, 1.875rem)',
        'body': '1rem',
        'small': '0.875rem',
        'caption': '0.75rem',
        'metric': 'clamp(2rem, 3vw, 3rem)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Geist', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
    },
  },
  plugins: [],
}


export default config
