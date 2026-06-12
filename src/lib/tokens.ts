/**
 * Humotion Design System — single source of truth for brand values used in JS/TSX.
 *
 * Color values live ONCE, in CSS custom properties (see src/index.css :root).
 * This module simply re-exposes the semantic tokens to TypeScript so inline
 * `style={{ ... }}` props and component logic reference the same source as CSS.
 *
 * ➜ Prefer Tailwind utilities (`bg-brand`, `text-brand`, `border-line`) where you can.
 * ➜ Use these constants only for inline styles / dynamic values.
 *
 * See DESIGN_SYSTEM.md for the full token architecture.
 */

/** Brand accent — acid lime. Resolves to the `--brand` CSS variable. */
export const ACCENT = 'var(--brand)';

/** Raw hex of the brand accent. Use only where a CSS variable can't resolve
 *  (e.g. canvas, meta theme-color, third-party libs). Keep in sync with --brand. */
export const ACCENT_HEX = '#d4ff00';

/** Semantic brand tokens, all resolving to CSS variables. */
export const BRAND = {
  /** Acid-lime accent. */
  accent: 'var(--brand)',
  /** Foreground that sits on top of the accent (near-black). */
  accentForeground: 'var(--brand-foreground)',
  /** Page background (near-black). */
  bg: 'var(--surface-0)',
  /** Primary text. */
  fg: 'var(--text)',
  /** Hairline border color. */
  line: 'var(--line)',
  /** Stronger hairline border color. */
  lineStrong: 'var(--line-strong)',
  /** Accent glow box-shadow. */
  glow: 'var(--brand-glow)',
} as const;
