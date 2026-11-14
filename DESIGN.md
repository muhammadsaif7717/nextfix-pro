# 🎨 DESIGN.md — NextFix Pro Design Specification
*(Google Stitch & Taste Engine Standard — High-Trust Electric Tech Palette)*

## 1. Brand Identity & Personality
- **Name:** NextFix Pro
- **Industry:** Smart Device, Smartphone, Laptop & Gadget Hardware Restoration
- **Mode:** Technical Excellence & High-Converting Authority (100% Light Mode)
- **Aesthetic:** High-Trust Silicon Valley Tech Hardware Lab. Crisp white canvas, rich electric cobalt blue action accents (`#2563EB`), emergency turnaround ember orange highlights (`#F97316`), deep slate typography (`#0F172A`), and subtle slate neutral card backgrounds (`#F8FAFC`).

---

## 2. Color Palette & Token System

| Token Name | Hex Code | Purpose & Application |
|---|---|---|
| `--color-primary` | `#2563EB` | Electric Tech Blue. Primary CTA buttons, active navigation links, icons, hotspot pins |
| `--color-primary-hover` | `#1D4ED8` | Deep Cobalt hover state for interactive primary actions |
| `--color-accent-speed` | `#F97316` | Emergency Speed Accent for 28-Min turnaround badges, express tags |
| `--color-secondary` | `#0F172A` | Deep Tech Slate. Main heading text, high-contrast dark buttons |
| `--color-tertiary` | `#F8FAFC` | Light Slate section backgrounds, card containers, input fills |
| `--color-bg-base` | `#FFFFFF` | Core Canvas White body background |
| `--color-text-main` | `#0F172A` | High-contrast headings and primary labels |
| `--color-text-body` | `#64748B` | Balanced readability for descriptive body copy (WCAG AA pass) |
| `--color-text-muted` | `#94A3B8` | Metadata, tags, timestamps, secondary labels |
| `--color-border-subtle` | `#E2E8F0` | Delicate structural card borders and dividers |
| `--color-border-input` | `#CBD5E1` | Clean accessible form input borders |
| `--color-success` | `#10B981` | Lifetime warranty tags, test pass indicators |

---

## 3. Typography Scale & Font System

- **Headings Font Family:** `var(--font-heading)` — Plus Jakarta Sans
- **Body Font Family:** `var(--font-sans)` — Plus Jakarta Sans

### Typographic Hierarchy
- **Hero Title (`H1`):** `text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]`
- **Section Title (`H2`):** `text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight font-heading`
- **Card Title (`H3` / `H4`):** `text-lg sm:text-xl font-bold text-[#0F172A] font-heading`
- **Sub-title / Overline Badge:** `text-xs font-bold text-[#2563EB] uppercase tracking-widest`
- **Body Text:** `text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed`
- **Caption / Meta:** `text-[11px] font-medium text-[#94A3B8]`

---

## 4. Spacing, Borders & Elevation Tokens

- **Border Radii:**
  - Standard Cards: `rounded-2xl` (`16px`)
  - Inner Elements / Images / Inputs: `rounded-xl` (`12px`)
  - Badges & Buttons: `rounded-full` (`9999px`)
- **Button Standards (Vercel Interaction Guidelines):**
  - Minimum touch target: `44px` height on mobile
  - Hover states: Smooth `300ms cubic-bezier(0.4, 0, 0.2, 1)` transition with slight `translateY(-2px)` elevation
  - Focus states: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2`
  - Active states: `active:scale-[0.98]`
- **Elevation / Shadows:**
  - Card Default: `shadow-xs` / `shadow-sm`
  - Card Hover: `shadow-xl` (`0 20px 25px -5px rgba(37, 99, 235, 0.08)`)
