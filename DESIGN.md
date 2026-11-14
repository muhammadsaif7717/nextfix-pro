# 🎨 DESIGN.md — NextFix Pro Design Specification
*(Google Stitch & Taste Engine Standard — Cyber Emerald & Cleanroom Precision Palette)*

## 1. Brand Identity & Personality
- **Name:** NextFix Pro
- **Industry:** Smart Device, Smartphone, Laptop & Gadget Hardware Restoration
- **Mode:** Technical Excellence & High-Converting Authority
- **Aesthetic:** High-Trust Silicon Valley Surgical Cleanroom Lab. Deep Obsidian foundations (`#090D16` / `#0F172A`), vibrant Cyber Emerald action accents (`#10B981` / `#059669`), luminous surgical mint & teal glows (`#14B8A6` / `#34D399`), crisp cleanroom white canvas (`#FFFFFF` / `#F8FAFC`), and razor-sharp typography.

---

## 2. Color Palette & Token System

| Token Name | Hex Code | Purpose & Application |
|---|---|---|
| `--color-primary` | `#10B981` | Cyber Emerald. Primary CTA buttons, active navigation links, icons, hotspot pins |
| `--color-primary-hover` | `#059669` | Deep Emerald hover state for interactive primary actions |
| `--color-accent-mint` | `#14B8A6` | Luminous Mint & Teal for gradients, underglows, and highlights |
| `--color-secondary` | `#0F172A` | Deep Tech Slate. Main heading text, dark buttons, frosted surfaces |
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
- **Hero Title (`H1`):** `text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08]`
- **Section Title (`H2`):** `text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight font-heading`
- **Card Title (`H3` / `H4`):** `text-lg sm:text-xl font-bold text-[#0F172A] font-heading`
- **Sub-title / Overline Badge:** `text-xs font-bold text-[#10B981] uppercase tracking-widest`
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
  - Focus states: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2`
  - Active states: `active:scale-[0.98]`
- **Elevation / Shadows:**
  - Card Default: `shadow-xs` / `shadow-sm`
  - Card Hover: `shadow-xl` (`0 20px 25px -5px rgba(16, 185, 129, 0.12)`)
