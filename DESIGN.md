# Portfolio Design System

## Overview
Dark-first developer portfolio built with Next.js 14 App Router, Tailwind CSS, and Framer Motion. The aesthetic is minimal, modern, and technical — conveying craft through consistent accent colors, geometric shapes, and subtle animation.

---

## Tech Stack
- **Framework**: Next.js 14 (App Router), TypeScript
- **Styling**: Tailwind CSS v3 + custom plugins (bg-grid, bg-dot)
- **Animation**: Framer Motion
- **Font**: Space Grotesk (Google Fonts) — all weights, all text
- **Icons**: react-icons v5 (Simple Icons set via `si` prefix)
- **Theme**: next-themes, dark default (`defaultTheme="dark"`)
- **Deployment**: Cloudflare Pages via `@cloudflare/next-on-pages`

---

## Colors

### Backgrounds
| Token | Hex | Usage |
|---|---|---|
| `bg-black` | `#000000` | Main page background |
| `bg-gray-900` | `#111827` | Project cards, skill cards |
| `dark:bg-slate-800/[0.8]` | slate-800 @ 80% | Hover backgrounds on skill cards |
| `bg-slate-900/[0.8]` | slate-900 @ 80% | MovingBorderBtn interior |

### Accent Colors
| Token | Hex | Role |
|---|---|---|
| `green-500` | `#22c55e` | **Primary accent** — underlines, borders, hover rings, CTAs, nav brand |
| `indigo-500` | `#6366f1` | **Secondary accent** — geometric hero shapes, double-bar underlines |
| `#c026d3` | fuchsia-600 | **Ambient glow** — `.glow` class, hero section only (200px box-shadow) |
| `sky-500` | `#0ea5e9` | MovingBorderBtn border gradient |

### Text
| Token | Usage |
|---|---|
| `text-white` | Primary headings, card titles, nav brand |
| `text-gray-300` | Body text, descriptions, skill labels |
| `text-gray-400` | Tertiary / meta text |

---

## Typography
- **Font family**: Space Grotesk — applied globally via `className` on `<body>`
- **Hero H1**: `text-4xl lg:text-7xl font-bold` — "Nice to meet you! 👋"
- **Section heading**: `text-3xl font-bold` — rendered by `<Title>` component
- **Card title**: `text-xl font-bold`
- **Body / description**: `text-lg text-gray-300` (hero) · `text-gray-300` (cards)
- **Nav brand**: `text-2xl font-bold`
- **Skill label**: `text-2xl font-bold text-center text-gray-300`
- **CTA button text**: `text-xl font-semibold`

---

## Spacing & Layout

### Container
```
max-w-7xl mx-auto p-5
```

### Sections
- Hero zone padding: wrapped inside grid-bg container
- Content zone: `mt-20` below hero
- Section vertical rhythm: `py-10`
- Section internal gap: `pt-20` before grids

### Cards
- Gap: `gap-6`
- Padding: `p-5`
- Border radius: `rounded-md`
- Hero shapes: `rounded-2xl` / `rounded-full`

---

## Grid Background Patterns
Custom Tailwind plugin generates SVG-based textures:
```
dark:bg-grid-white/[0.05]   — subtle white grid on dark bg (hero)
bg-grid-black/[0.2]         — darker grid for light mode
bg-dot-*                    — dot pattern variant
bg-grid-small-*             — tighter grid variant
```
The hero grid fades out via `bg-gradient-to-t from-black` applied as an absolutely positioned overlay (`h-10 xl:h-32`).

---

## Components

### `<Title>`
Section headings with a signature double underline (green + indigo bars).
```tsx
// Section heading variant
<Title text="Projects 🎨" isButton={false} className="flex flex-col items-center justify-center rotate-6" />

// CTA button variant
<Title text="Contact Me 📭" isButton={true} />
```
- `isButton={false}`: heading + two 160px bars stacked (`bg-green-500` then `bg-indigo-500 translate-x-2`)
- `isButton={true}`: `border-2 border-green-500` pill, `hover:bg-green-500 hover:text-white`
- Rotation alternates: `rotate-6` / `-rotate-6` per section

### `<MovingBorderBtn>`
Animated SVG border tracing around a button. Used for Resume CTA.
```tsx
<MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
  <p>🧰 My Resume</p>
</MovingBorderBtn>
```
- Container: `bg-transparent p-[1px] overflow-hidden`
- Inner: `bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl`
- Border glow: `bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]` at 80% opacity

### `<HoverEffect>` — Skill Cards
2–3 column grid of icon + label cards with Framer Motion hover background.
```tsx
<HoverEffect items={[{ text: "Flutter", Icon: SiFlutter }]} />
```
- Card base: `bg-black rounded-md`
- Hover ring: `group-hover:ring-2 ring-green-500 transition-all duration-500`
- Hover backdrop: `dark:bg-slate-800/[0.8]` animated via `layoutId="hoverBackground"`
- Icon: `w-8 h-8 mx-auto`
- Label: `text-2xl font-bold text-center text-gray-300`
- Inner padding: `py-10 space-y-5`

### Project Cards
Manual card grid with image thumbnails.
```
rounded-md · bg-gray-900 · hover:scale-105 · transition-transform transform
```
Structure:
```
<div.rounded-md.bg-gray-900.text-white.overflow-hidden>
  <Image />                          // full-width, mb-4
  <div.p-5.pt-2>
    <h2.text-xl.font-bold.mb-2>     // project title
    <p.text-gray-300.mb-4>          // description
    <div.flex.flex-row.items-center> // tech icons row
      <span.w-6.h-6.mx-2>           // each icon
```

### `<Navbar>` / `<Footer>`
```
nav.py-10.flex.justify-between.items-center.animate-move-down
  h1.text-2xl.font-bold.underline.underline-offset-8.decoration-green-500.-rotate-2
  div.flex.items-center.gap-5
    // social icons: w-5 h-5 hover:scale-125 transition-all
```
Footer reuses Navbar with `flex-col gap-5` and `border-t mt-10`.

---

## Animations

| Name | Class | Behavior |
|---|---|---|
| Entrance up | `animate-move-up` | `translateY(10→0px)` + `opacity(0→1)` · 1s linear forwards |
| Entrance down | `animate-move-down` | Same direction reversed · navbar only |
| Card hover lift | Tailwind | `hover:scale-105 transition-transform transform` |
| Skill hover bg | Framer Motion | `AnimatePresence` opacity on `layoutId` span |
| Skill hover ring | Tailwind | `ring-2 ring-green-500 duration-500` |
| Resume border | Framer Motion `useAnimationFrame` | SVG path tracing at `2000ms` duration |

---

## Hero Geometric Decoration
Four colored shapes in a 2×2 grid, rotated `-30deg`:
```
w-72 h-72 space-y-3 -rotate-[30deg]
  Row 1: translate-x-8
    w-32 h-32 rounded-2xl bg-green-500
    w-32 h-32 rounded-full bg-indigo-500
  Row 2: -translate-x-8
    w-32 h-32 rounded-2xl bg-indigo-500
    w-32 h-32 rounded-full bg-green-500
  .glow (absolute, top-40%, right-50%, -z-10)
    box-shadow: 0 0 200px 130px #c026d3
```

---

## Page Layout Pattern
```
div.min-h-screen.bg-black.overflow-hidden
  ├── Hero zone (grid bg + gradient fade)
  │     div.dark:bg-black.dark:bg-grid-white/[0.05]...relative
  │       div.max-w-7xl.mx-auto.p-5
  │         <Navbar />        ← animate-move-down
  │         <HeroSection />   ← animate-move-up
  │       div.h-10.xl:h-32.bg-gradient-to-t.from-black  ← fade overlay
  └── Content zone
        div.max-w-7xl.mx-auto.p-5.mt-20
          <Skills />
          <Projects />
          <Footer />
```

### Simpler sub-pages (Blog, Admin)
```
div.min-h-screen.bg-black.overflow-hidden
  div.max-w-7xl.mx-auto.p-5
    <Navbar />
    <main content with animate-move-up>
    <Footer />
```

---

## Writing & Voice Guidelines
- Emoji used sparingly as personality accents (👋 🧰 📭 🎨 ✍️)
- First-person, conversational: "I'm Naod", "apps that users love"
- Section titles: short + punchy with emoji suffix
- Descriptions: 1–2 sentences, benefit-focused

---

## New Page Checklist
When adding a page, ensure:
1. Root: `min-h-screen bg-black overflow-hidden`
2. Container: `max-w-7xl mx-auto p-5`
3. Include `<Navbar />` at top
4. Section headings via `<Title>` with alternating rotation
5. Cards: `bg-gray-900 rounded-md text-white`
6. Secondary text: `text-gray-300`
7. Accent: `green-500` primary, `indigo-500` secondary
8. Entrance: `animate-move-up` on main content wrapper
9. Include `<Footer />` at bottom
10. Add `export const runtime = "edge"` for Cloudflare compatibility
