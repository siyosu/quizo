/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '24px',
      screens: {
        '2xl': '1440px'
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        background: `hsl(var(--background))`,
        foreground: `hsl(var(--foreground))`,
        card: `hsl(var(--card))`,
        'card-foreground': `hsl(var(--card-foreground))`,
        popover: `hsl(var(--popover))`,
        'popover-foreground': `hsl(var(--popover-foreground))`,
        primary: `hsl(var(--primary))`,
        'primary-foreground': `hsl(var(--primary-foreground))`,
        secondary: `hsl(var(--secondary))`,
        'secondary-foreground': `hsl(var(--secondary-foreground))`,
        muted: `hsl(var(--muted))`,
        'muted-foreground': `hsl(var(--muted-foreground))`,
        accent: `hsl(var(--accent))`,
        'accent-foreground': `hsl(var(--accent-foreground))`,
        destructive: `hsl(var(--destructive))`,
        'destructive-foreground': `hsl(var(--destructive-foreground))`,
        border: `hsl(var(--border))`,
        input: `hsl(var(--input))`,
        ring: `hsl(var(--ring))`
      }
    }
  },
  plugins: []
}
