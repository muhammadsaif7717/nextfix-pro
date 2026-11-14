# 🎨 DESIGN.md — NextFix Pro / WeFix Design Specification
*(Google Stitch & Taste Engine Standard)*

## 1. Brand Identity & Personality
- **Name:** NextFix Pro (WeFix Theme Specification)
- **Industry:** Smart Device, Smartphone, Laptop & Gadget Hardware Restoration
- **Mode:** Persuade / Technical Excellence (100% Light Mode)
- **Aesthetic:** Editorial Tech Craftsmanship. Clean white canvas, high-contrast dark headings, vibrant coral-orange action accents, and subtle neutral gray card elevations.

---

## 2. Color Palette & Token System

| Token Name | Hex Code | Purpose & Application |
|---|---|---|
| `--color-primary` | `#EF644C` | Signature WeFix Coral-Orange. Primary CTA buttons, active links, accents, hotspot pins |
| `--color-primary-hover` | `#D94F38` | Deep coral hover state for interactive primary actions |
| `--color-secondary` | `#1F1F1F` | Deep Charcoal/Black. Dark buttons, main heading text, high-contrast highlights |
| `--color-secondary-hover` | `#EF644C` | Inverted hover state for secondary actions |
| `--color-tertiary` | `#F6F6F6` | Light Gray section backgrounds, card containers, input fills |
| `--color-bg-base` | `#FFFFFF` | Core Canvas White body background |
| `--color-text-main` | `#1F1F1F` | High-contrast headings and primary labels |
| `--color-text-body` | `#636363` | Balanced readability for descriptive body copy (WCAG AA pass) |
| `--color-text-muted` | `#888888` | Metadata, tags, timestamps, secondary labels |
| `--color-border-subtle` | `#E8E8E8` | Delicate structural card borders and dividers |
| `--color-border-input` | `#D5D5D5` | Clean accessible form input borders |
| `--color-success` | `#10B981` | Lifetime warranty tags, test pass indicators |

---

## 3. Typography Scale & Font System

- **Headings Font Family:** `var(--font-heading)` — Plus Jakarta Sans / Space Grotesk
- **Body Font Family:** `var(--font-inter)` — Inter / Manrope (system fallback: `-apple-system, sans-serif`)

### Typographic Hierarchy
- **Hero Title (`H1`):** `text-3xl sm:text-5xl lg:text-6xl font-black text-[#1F1F1F] tracking-tight leading-[1.12]`
- **Section Title (`H2`):** `text-2xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] tracking-tight font-heading`
  - *WeFix Signature Character Spacing (`wdt-spaced-heading`):* `tracking-[0.12em] sm:tracking-[0.2em] uppercase font-bold`
- **Card Title (`H3` / `H4`):** `text-lg sm:text-xl font-bold text-[#1F1F1F] font-heading`
- **Sub-title / Overline Badge:** `text-xs font-bold text-[#EF644C] uppercase tracking-widest`
- **Body Text:** `text-xs sm:text-sm md:text-base text-[#636363] leading-relaxed`
- **Caption / Meta:** `text-[11px] font-medium text-[#888888]`

---

## 4. Spacing, Borders & Elevation Tokens

- **Border Radii:**
  - Standard Cards: `rounded-2xl` (`16px`)
  - Inner Elements / Images / Inputs: `rounded-xl` (`12px`)
  - Badges & Buttons: `rounded-full` (`9999px`)
- **Button Standards (Vercel Interaction Guidelines):**
  - Minimum touch target: `44px` height on mobile
  - Hover states: Smooth `300ms cubic-bezier(0.4, 0, 0.2, 1)` transition with slight `translateY(-2px)` elevation
  - Focus states: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF644C] focus-visible:ring-offset-2`
  - Active states: `active:scale-[0.98]`
- **Elevation / Shadows:**
  - Card Default: `shadow-sm` (`0 1px 2px 0 rgba(0, 0, 0, 0.05)`)
  - Card Hover: `shadow-xl` (`0 20px 25px -5px rgba(0, 0, 0, 0.1)`)
  - Floating Badges: `shadow-lg` (`0 10px 15px -3px rgba(0, 0, 0, 0.1)`)

---

## 5. Responsive Breakpoint Matrix

- **Minimum Supported Viewport:** `360px` (Galaxy S / small mobile devices)
- **Mobile (`360px – 639px`):** Single column layouts, touch-friendly 44px tap targets, sticky conversion dock
- **Tablet (`640px – 1023px`):** 2-column grids, balanced typography, visible hotline widgets
- **Desktop (`1024px – 1440px+`):** Full 4-5 column grids, multi-step interactive hotspot visualizer, fixed navigation
