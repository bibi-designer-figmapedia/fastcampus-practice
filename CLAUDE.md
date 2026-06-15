# 프로젝트: [fastcampus-practice]

## 기술 스택

- 프론트엔드: React 19 + TypeScript 5.x
- 스타일링: Tailwind v4 + CSS custom properties (디자인 토큰)
- 빌드: Vite 6
- UI 문서화: Storybook 8
- 테스트: Vitest + @storybook/test

## 디렉토리 구조

- `src/components/ui/` — 디자인 시스템 UI 컴포넌트
- `src/tokens/` — CSS custom properties (Figma 변수와 1:1 매핑)
- `src/stories/tokens/` — 토큰 시각화 Storybook stories
- `src/lib/` — 유틸리티

## 디자인 시스템 규칙

### 토큰 사용 (절대 규칙)

- 하드코딩된 색상값(hex, rgb, hsl) 사용 금지. 반드시 `var(--color-*)` 사용.
- 하드코딩된 스페이싱 사용 금지. 반드시 `var(--spacing-*)` 사용.
- 타이포그래피는 `var(--font-*)`, `var(--text-*)` 토큰만 사용.

### Figma에서 UI 구현 시

- 먼저 `docs/design-tokens.md`를 읽어 토큰 매핑 테이블을 확인할 것.
- `get_design_context` 사용 (`get_metadata` 아님).
- 에이전트 위임 시: 연속 구현 가능. 단, 5개 이상이면 새 세션 권장.
- 에이전트 없이 직접 구현 시: 한 번에 하나의 컴포넌트만.
- `src/components/ui/`에 기존 컴포넌트가 있으면 재사용 — 중복 생성 금지.

### Storybook 규칙

- 모든 컴포넌트는 반드시 `.stories.tsx` 파일을 함께 생성할 것.
- Story 포맷: CSF3 + TypeScript + `satisfies Meta<typeof Component>`
- 모든 story에 `tags: ['autodocs']` 포함.
- `parameters.design.url`에 해당 Figma 프레임 URL 연결.
- 모든 variant에 대한 개별 story 생성.
- 최소 1개의 play function 포함.

### Code Connect

- 매핑 정보는 `figma-code-connect.json`에 있음.
- Figma 프레임 구현 시, 먼저 Code Connect에서 기존 매핑 확인.

## 컴포넌트 규칙

- 컴포넌트 1개 = 4개 파일: `.tsx` / `.stories.tsx` / `.test.tsx` / `index.ts`
- Named export만: `export function Button() {}`
- Props 인터페이스: `interface ButtonProps {}`

## 에이전트 위임 규칙

- Figma URL이 포함된 구현 요청 → `@agent-figma-implementer`에 위임 (필수)
- 토큰 동기화/비교 요청 → `@agent-token-checker`에 위임
- 디자인 감사/토큰 검증 요청 → `@agent-design-reviewer`에 위임
- QA 리포트/전체 검사/릴리즈 전 검사 → `@agent-qa-reporter`에 위임
- Figma MCP 호출은 반드시 서브에이전트에서 실행할 것 (컨텍스트 보호)

## 빌드 및 테스트 명령어

- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드
- `npm run storybook` — Storybook (http://localhost:6006)
- `npm test` — Vitest
- `npm run lint` — ESLint + Prettier
- `npm run typecheck` — tsc --noEmit
