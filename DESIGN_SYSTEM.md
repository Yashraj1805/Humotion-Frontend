# Humotion Design System

The design bible for the Humotion AI site. The aesthetic is **dark technical-editorial**:
a near-black canvas, a single acid-lime accent, Swiss-grid layouts, monospace
labels, hard hairline borders, and sharp corners. Restraint over decoration.

> **One rule above all:** colour, type, spacing, and borders come from **tokens**,
> not hard-coded values. The brand colour lives in exactly one place
> (`--brand` in `src/index.css`). Everything else points at it.

---

## 1. Token architecture (3 tiers)

Tokens are defined in [`src/index.css`](src/index.css) and exposed to Tailwind in
[`tailwind.config.ts`](tailwind.config.ts) and to TS/TSX in
[`src/lib/tokens.ts`](src/lib/tokens.ts).

```
Tier 1  PRIMITIVE   raw OKLCH ramps + base hex        --acid-500, --ink-950
   ↓
Tier 2  SEMANTIC    purpose-driven (use these)        --brand, --surface-0, --line, --text
   ↓
Tier 3  COMPONENT   component-specific classes        .btn-accent, .tag, .panel
```

Why OKLCH for the primitive ramps? It is perceptually uniform — equal lightness
reads as equally light — so scales and accessibility math behave predictably.
The brand swatch itself is pinned to its exact hex (`#d4ff00`) to avoid shifting a
shipping colour; the surrounding ramp is expressed in OKLCH for future scales.

### Semantic tokens (the ones you actually use)

| Token | Value | Use for |
|---|---|---|
| `--brand` | `#d4ff00` (acid lime) | the single accent — CTAs, marks, active states |
| `--brand-foreground` | near-black | text/icons sitting **on** the accent |
| `--brand-soft` | `rgba(212,255,0,.18)` | accent glows / tints |
| `--brand-glow` / `--brand-glow-sm` | box-shadows | accent halo on brand marks |
| `--surface-0` | `#0a0a0a` | page background |
| `--surface-1` | `rgba(255,255,255,.025)` | hover / raised rows |
| `--surface-2` | `rgba(255,255,255,.05)` | cards, popovers |
| `--line` | `rgba(255,255,255,.10)` | default hairline border |
| `--line-strong` | `rgba(255,255,255,.15)` | emphasised border |
| `--text` | `#f2f2f2` | primary text |
| `--text-muted` | `rgba(255,255,255,.6)` | secondary text |
| `--text-faint` | `rgba(255,255,255,.4)` | tertiary / metadata |

Legacy `--mos-*` variables remain as aliases of these and resolve correctly; new
code should prefer the names above.

---

## 2. How to consume tokens

**Prefer Tailwind utilities** (wired to the CSS vars):

```tsx
<div className="bg-surface-0 text-ink border border-line">
  <button className="bg-brand text-brand-foreground shadow-glow">book demo</button>
  <span className="text-ink-muted">secondary</span>
</div>
```

Available semantic utilities: `bg-brand` · `text-brand` · `border-brand` ·
`bg-surface-0|1|2` · `border-line` · `border-line-strong` ·
`text-ink` · `text-ink-muted` · `text-ink-faint` · `shadow-glow` · `shadow-glow-sm`.

**For inline styles / dynamic values**, import the token — never re-declare the hex:

```tsx
import { ACCENT } from '@/lib/tokens';   // ACCENT === 'var(--brand)'
<span style={{ color: ACCENT }}>→</span>
```

> ⚠️ **Do not** write `const ACCENT = '#d4ff00'` in a component. That pattern
> (previously duplicated across 18 files) is what the system replaces. There is
> one source of truth: `--brand`, surfaced via `@/lib/tokens` and `bg-brand`.

---

## 3. Component layer

Reusable classes in `src/index.css` — reach for these before hand-rolling
utility strings.

| Class | What it is |
|---|---|
| `.btn` + `.btn-accent` | primary CTA — acid fill, black text, lifts on hover |
| `.btn` + `.btn-outline` | secondary — hairline border, brightens on hover |
| `.btn` + `.btn-ghost` | tertiary — faint text link |
| `.tag` | small mono chip inside a hairline box |
| `.panel` / `.panel-raised` | hairline card surface / raised card surface |
| `.eyebrow` | mono uppercase 11px label (section kickers, `// …`) |
| `.display` | tight, heavy headline (Space Grotesk, -0.04em) |
| `.mono` / `.serif-italic` | font-family helpers |
| `.glow-brand` | accent halo for the logo dot |
| `.bg-grid` / `.bg-grid-fine` | background grid textures |
| `.link-draw` | underline that draws in on hover |

Shared React layout primitives live in
[`src/components/layout/PageShell.tsx`](src/components/layout/PageShell.tsx):
`PageRoot`, `PageHero`, `Section`, `CTABand`. Build new pages from these so the
grid, spacing, and section kickers stay consistent.

---

## 4. Typography

Three families, loaded in `src/index.css`:

| Role | Family | Class |
|---|---|---|
| Display / body | **Space Grotesk** | `.display`, `font-sans` |
| Labels / UI controls / code | **JetBrains Mono** | `.mono`, `.eyebrow`, `font-mono` |
| Editorial accent | **Instrument Serif** (italic) | `.serif-italic`, `font-serif` |

Conventions: headings use `.display` with tight tracking; all small uppercase
labels use `.eyebrow` / `.mono` at `tracking-[0.22em]`; section kickers read
`§ NN` + a lowercase label.

---

## 5. Shape, spacing, motion

- **Corners:** sharp. Radius token `--radius: 0.25rem`; avoid `rounded-xl/2xl/full`
  on cards (circles are fine for dots/decorative blurs).
- **Borders:** hairlines via `border-line` / `border-line-strong`. Grids are often
  built with `gap-px bg-line` to draw 1px separators.
- **Spacing:** Tailwind's default scale; sections use `py-20`–`py-24`, page gutters
  `px-4 sm:px-6 lg:px-8`, max width `1400px`.
- **Motion:** Framer Motion reveals (`opacity/y`, ~0.45s, ease `[0.2,0.7,0.2,1]`);
  CSS `.rise-*` for staggered hero entrances. Keep it subtle.

---

## 6. Do / Don't

✅ Use `bg-brand` / `ACCENT` / `--brand` for the accent.
✅ Build pages from `PageShell` primitives; use `.btn-*`, `.tag`, `.panel`.
✅ Keep one accent colour. The acid lime is the whole palette's punctuation.

❌ Don't hard-code `#d4ff00`, `bg-green-400`, blue/navy/rainbow gradients, or
   white card backgrounds (the previous `services/index.tsx` and the removed
   `gradient-brand`/`navy` tokens were exactly this drift).
❌ Don't introduce a second accent or light-theme surfaces.
❌ Don't add rounded card corners or drop-shadow “elevation” — depth here comes
   from hairlines and the grid, not blur.

---

## 7. Files

| File | Role |
|---|---|
| `src/index.css` | token definitions (3 tiers) + component classes |
| `tailwind.config.ts` | semantic colour/shadow utilities → CSS vars |
| `src/lib/tokens.ts` | single TS source of truth (`ACCENT`, `BRAND`) |
| `src/components/layout/PageShell.tsx` | shared page primitives |

*A design system is a living product. When you add a pattern, add its token and a
line here — keep this file and the CSS in sync.*
