---
name: pseudo-state-styling
description: How to apply token-based ::placeholder / :focus-within / other pseudo-state styles when components use inline-style tokens
metadata:
  type: reference
---

This repo's components style via inline `style` objects (see [[repo-component-conventions]]), but inline styles cannot express pseudo-selectors (`::placeholder`, `:focus-within`, `:hover`). As of 2026-06, no prior component needed them.

**Pattern introduced in `SearchBar`** (`src/components/ui/SearchBar/SearchBar.tsx`): a module-level `SCOPED_CSS` string scoped to a stable root class (`ds-searchbar`), rendered via an inline `<style>{SCOPED_CSS}</style>` inside the component root, using only `var(--*)` tokens. The custom `className` prop is appended after the internal root class.

**How to apply:** Reuse this when a Figma spec sets placeholder color, focus ring, or hover state that must honor design tokens. Keep all values as tokens. NOTE: this is a newly introduced convention — it was flagged to the user as new, so if a later component contradicts it (e.g. team adds a CSS-module approach), prefer the established one and update this note.
