---
name: no-node-modules-typecheck
description: node_modules is often absent in this workspace, so tsc/typecheck/build can't run; verify types manually against source
metadata:
  type: project
---

`node_modules/` was absent in this workspace (observed 2026-06-18), so `npm run typecheck` (`tsc -b`), `npx tsc`, and `npm run build` all fail with "tsc: command not found" / npx's "not the tsc you are looking for". TypeScript ~5.8 is declared in devDependencies but not installed.

**Why:** The repo is checked out without an `npm install`, and installing is usually out of scope (and may have no network).

**How to apply:** When a task asks you to verify with `npm run typecheck`/`build`, first check `ls node_modules`. If absent, do NOT install unprompted. Instead verify type/import correctness manually by reading the actual exported symbols from the imported modules' `index.ts` and source (member of a union type, prop name/optionality, named-vs-default export), confirm tokens exist via grep in `src/tokens/`, and report that the command couldn't run due to missing deps. See [[repo-component-conventions]].
