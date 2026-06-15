---
name: spacing-6px-gap
description: Spacing scale skips 6px and has no 1px/border-width token; small fixed values use a flagged literal, never an invented token
metadata:
  type: project
---

The project spacing scale has gaps where Figma values land. Verified absent in `src/tokens/`:
- **No `--spacing-6`** — scale jumps `--spacing-4` → `--spacing-8`. Figma uses 6px gaps (e.g. icon-to-text spacing).
- **No 1px / border-width token** — scale starts 0/2/4/8..., so hairline lines (dividers, borders, 1px rules) have no token, and there is no `--border-width-*` set either.

**Why:** Spacing tokens mirror Figma variables 1:1, and Figma's synced set skips these steps. Inventing a token would diverge from the synced source.

**How to apply:** When a Figma value (gap, padding, or line/border thickness) has no matching token, do NOT create one. Follow the established convention (see `Category`, `PostCardStats`, and `Divider`'s `LINE_THICKNESS`): extract the value to a named const and annotate with a `// ⚠️ 토큰 외 값` comment explaining why no token matches. Flag it in the completion report and suggest adding the token if the team wants to formalize it. See [[repo-component-conventions]].
