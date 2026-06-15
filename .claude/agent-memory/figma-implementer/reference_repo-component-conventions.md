---
name: repo-component-conventions
description: Where to look for this repo's UI component conventions (token usage, 4-file set, CSF3 stories, tests)
metadata:
  type: reference
---

This repo's UI component conventions are best learned by reading existing components in `src/components/ui/` rather than guessing:

- **4-file set per component**: `Component.tsx` / `Component.stories.tsx` / `Component.test.tsx` / `index.ts` (barrel, named export of component + its types).
- **Reference examples**: `src/components/ui/Category/` (state variant via prop, inline-style tokens, aria-pressed, play function) and `src/components/ui/PostCardImage/` (numeric `type` variant, Figma URL in stories, AllTypes story).
- **Styling**: inline `style` objects using `var(--color-*)`, `var(--spacing-*)`, `var(--radius-*)`, and `font: var(--<text-style>)` shorthand. No hardcoded hex/px (px allowed only when no token exists, with a `⚠️` comment and prior user approval — see Category's 6px/10px padding).
- **Token map**: `docs/design-tokens.md` is the authoritative Figma-variable → CSS-property table.
- **Code Connect**: `figma-code-connect.json` maps Figma node IDs to components.
- **Icons**: `src/components/ui/Icon` exports `Icon` with `name` from a fixed `ICON_NAMES` set (includes `heart_empty`, `heart_fill`, `message`, `iconview`, etc.). Reuse it — do not inline SVGs.
- **Tests**: Vitest with manual `createRoot` render (no shared setup file); set `IS_REACT_ACT_ENVIRONMENT`. Stories use `@storybook/test` (`within`, `userEvent`, `expect`, `fn`) and `satisfies Meta<typeof Component>` + `tags: ['autodocs']`.
- **Verify with**: `npm run typecheck` and `npm run build`.
