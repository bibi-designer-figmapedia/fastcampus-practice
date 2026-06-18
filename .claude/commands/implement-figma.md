Figma 디자인을 코드 + Storybook story로 구현합니다.

## 절차

1. `docs/design-tokens.md` 읽어 토큰 매핑 파악
2. `figma-code-connect.json` 확인
3. Figma MCP: `get_design_context` 호출
4. `get_screenshot`로 시각적 레퍼런스 캡처
5. 4개 파일 한 세트로 생성:
   - Component.tsx (토큰 기반, 하드코딩 금지)
   - Component.stories.tsx (CSF3, autodocs, Figma URL, 모든 variant, play function)
   - Component.test.tsx (Vitest)
   - index.ts (barrel export)
6. verify-design skill로 토큰 검증
7. `npm run typecheck` 실행

$ARGUMENTS
