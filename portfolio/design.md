# Design System — Aniket Mehare Portfolio

## Overview

Personal portfolio for Aniket Mehare — AI Product Leader & Builder. Built with Next.js, Tailwind CSS, and Framer Motion. The aesthetic is clean, editorial, and professional with a nature-inspired teal palette.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Background | `#EEF2EE` | Page background, Hero, Projects section |
| Surface | `#FFFFFF` | Cards, Skills section background |
| Surface Alt | `#E4EDE9` | Stat badges on project cards |
| Border | `#D4E2DA` | Card borders, nav border on scroll |
| Border Light | `#C8D8D0` | Skill pills, stat card borders |
| Primary | `#2D7B69` | Brand teal — links, badges, CTAs, accents |
| Primary Dark | `#245F52` | Primary hover state |
| Heading | `#1A1A1A` | Primary text, headings |
| Body | `#3D5A50` | Secondary headings, taglines |
| Muted | `#6B7A72` | Body copy, descriptions, nav links |
| Muted Light | `#8A9E96` | Scroll hint text |
| Scrollbar | `#B5C9BE` | Scrollbar thumb |

---

## Typography

### Fonts
- **Display / Headings:** Playfair Display (`var(--font-playfair)`) — serif, elegant
- **Body / UI:** Inter (`var(--font-inter)`) — sans-serif, clean

### Scale

| Element | Size | Weight | Font | Color |
|---|---|---|---|---|
| Section eyebrow | `text-xs` / `text-sm` | `font-semibold` | Inter | `#2D7B69` uppercase, `tracking-widest` |
| Page H1 | `text-5xl` / `text-7xl` | `font-bold` | Playfair | `#1A1A1A` |
| Section H2 | `text-3xl` / `text-4xl` | `font-bold` | Playfair | `#1A1A1A` |
| Card H3 (featured) | `text-xl` | `font-bold` | Inter | `#1A1A1A` |
| Card H3 (small) | `text-lg` | `font-bold` | Inter | `#1A1A1A` |
| Tagline | `text-xl` / `text-2xl` | `font-semibold` | Inter | `#3D5A50` |
| Body | `text-lg` | normal | Inter | `#6B7A72` |
| Card body | `text-sm` | normal | Inter | `#6B7A72` |
| Tags / pills | `text-xs` | `font-medium` | Inter | `#6B7A72` or `#3D5A50` |

---

## Spacing & Layout

- **Max width:** `max-w-6xl mx-auto`
- **Section padding:** `py-24 px-6` (projects), `py-16 px-6` (skills/experience)
- **Hero padding:** `pt-20 pb-10 px-6`
- **Nav height:** `h-16`
- **Card border radius:** `rounded-2xl`
- **Button border radius:** `rounded-lg`
- **Pill border radius:** `rounded-full`

### Grid
- **Hero:** `grid-cols-1 lg:grid-cols-5` — 3/5 text, 2/5 photo
- **Featured Projects:** `grid-cols-1 lg:grid-cols-2`
- **Supporting Projects:** `grid-cols-1 md:grid-cols-2`
- **Skills:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`

---

## Components

### Navigation
- Fixed top, full width, `z-50`
- Transparent when at top; on scroll: `bg-[#EEF2EE]/95 backdrop-blur-sm shadow-sm border-b border-[#D4E2DA]`
- Logo: Playfair, `text-xl`, teal `#2D7B69`
- Nav links: hidden on mobile (`hidden md:flex`), `text-sm font-medium text-[#6B7A72]`
- CTA button: `bg-[#2D7B69] text-white text-sm font-semibold rounded-lg`

### Buttons / CTAs

**Primary:**
```
bg-[#2D7B69] text-white font-semibold rounded-lg
hover:bg-[#245F52] shadow-md hover:shadow-lg hover:-translate-y-0.5
transition-all
```

**Secondary / Ghost:**
```
bg-white border-2 border-[#C8D8D0] text-[#1A1A1A] font-semibold rounded-lg
hover:border-[#2D7B69] hover:text-[#2D7B69]
transition-all
```

### Stat Cards (Hero)
```
bg-white border border-[#C8D8D0] rounded-xl px-5 py-3 shadow-sm
```
- Value: `text-xl font-bold text-[#1A1A1A]`
- Label: `text-xs text-[#6B7A72]`

### Project Cards

**Featured:**
- `bg-white border border-gray-200 rounded-2xl overflow-hidden`
- Hover: `hover:shadow-xl hover:-translate-y-1 transition-all duration-300`
- Image height: `h-52`
- Padding: `p-6`

**Supporting:**
- Same base styles, smaller image (`h-40`)
- Padding: `p-5`

### Stat Badge (on project cards)
```
bg-[#E4EDE9] rounded-xl px-4 py-2.5
text-sm font-semibold text-[#2D7B69]
```

### Skill Cards
```
bg-[#EEF2EE] border border-[#D4E2DA] rounded-2xl p-5
```
- Skill pills: `bg-white border border-[#C8D8D0] text-[#3D5A50] px-3 py-1.5 rounded-full text-xs font-medium`

### Eyebrow Labels (section headers)
```
text-xs font-semibold text-[#2D7B69] uppercase tracking-widest mb-2
```

### Floating Badges (Hero photo)
- **Location badge:** `bg-white rounded-2xl shadow-lg px-4 py-3 border border-[#D4E2DA]`
- **Experience badge:** `bg-[#2D7B69] rounded-2xl shadow-lg px-4 py-3` (teal background, white text)

---

## Animation

All animations use **Framer Motion**.

### Entry animations
- **Hero text:** `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}`, `duration: 0.7, ease: "easeOut"`
- **Hero photo:** `initial={{ opacity: 0, scale: 0.95 }}` → `duration: 0.7, delay: 0.2`
- **Section items:** `initial={{ opacity: 0, y: 20 }}` → staggered with `delay: i * 0.1` or `i * 0.12`
- **Scroll hint:** `delay: 1.4` fade in

### Scroll-triggered sections
- `useInView(ref, { once: true, margin: "-80px" })` — animate once when 80px into viewport

### Card hover
- `-translate-y-1` lift on hover
- `group-hover:scale-105 transition-transform duration-500` on card images

### Nav transition
- `transition-all duration-300` on background/shadow change

---

## Section Structure

1. **Nav** — fixed overlay
2. **Hero** — full-width, 5-col grid, photo + text + stats + CTAs
3. **Projects** (`#work`) — featured 2-col + supporting 2-col
4. **Skills** — white background, 4-col skill card grid
5. **Experience** (`#experience`) — timeline/card layout
6. **Contact** (`#contact`) — CTA section

---

## Scrollbar
```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #EEF2EE; }
::-webkit-scrollbar-thumb { background: #B5C9BE; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #2D7B69; }
```

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Fonts:** Google Fonts — Inter + Playfair Display
- **Images:** `next/image` with `fill` + `object-cover object-top`
- **Deployment:** Railway
