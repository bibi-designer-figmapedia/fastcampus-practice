---
name: controlled-input-onchange-test
description: Vitest manual-render trick to fire React onChange on an <input> (native value setter, not raw .value)
metadata:
  type: reference
---

In this repo's manual `createRoot` Vitest setup (no testing-library `fireEvent`; see [[repo-component-conventions]]), setting `input.value = 'x'` then dispatching an `input` event does NOT trigger React's synthetic `onChange` — React's value tracker doesn't see the change, so the spy is never called.

**Fix (used in `SearchBar.test.tsx`):** set the value through the native prototype setter so React's tracker registers it:

```ts
const nativeSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype, 'value',
)!.set!
act(() => {
  nativeSetter.call(input, 'x')
  input.dispatchEvent(new Event('input', { bubbles: true }))
})
```

**How to apply:** Use this whenever asserting `onChange`/`onInput` fired on a controlled input/textarea in a `.test.tsx`. In `.stories.tsx` play functions, prefer `userEvent.type` which handles this correctly.
