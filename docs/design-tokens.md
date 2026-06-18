# 디자인 토큰 매핑 테이블

> Figma 변수명 ↔ CSS custom property 매핑.
> Claude Code가 Figma 디자인 구현 시 이 문서를 참조합니다.
> 토큰 추가/변경 시 이 문서도 업데이트하세요.
>
> **동기화 정보**: Figma `TyHIRM96agsiPYsydx8bUb` (node `0:1`) / 2026-06-10 / 총 132개 변수

## 네이밍 규칙

- Figma `/` → CSS `-` 변환, 소문자 kebab-case. 예: `text/primary` → `--color-text-primary`
- 색상 변수에는 `--color-` 접두사 부여 (프로젝트 규칙: 색상은 `var(--color-*)`만 사용)
- Semantic 색상은 resolved hex가 일치하는 primitive를 `var()`로 참조

## 색상 — Primitive (46개)

### Gray (19개)

| Figma 변수명 | CSS Property         | 값      |
| ------------ | -------------------- | ------- |
| gray/100     | --color-gray-100     | #ffffff |
| Gray/100     | --color-gray-100-alt | #f9fafb |
| Gray/200     | --color-gray-200     | #fafafa |
| gray/300     | --color-gray-300     | #f5f7fa |
| gray/305     | --color-gray-305     | #f1f5f9 |
| gray/340     | --color-gray-340     | #e2e8f0 |
| gray/360     | --color-gray-360     | #e5e7eb |
| gray/400     | --color-gray-400     | #d1d5db |
| gray/490     | --color-gray-490     | #94a3b8 |
| gray/500     | --color-gray-500     | #9ca3af |
| gray/540     | --color-gray-540     | #7c8484 |
| gray/600     | --color-gray-600     | #6b7280 |
| gray/610     | --color-gray-610     | #64748b |
| gray/700     | --color-gray-700     | #4b5563 |
| gray/800     | --color-gray-800     | #374151 |
| gray/850     | --color-gray-850     | #2c3030 |
| gray/900     | --color-gray-900     | #262626 |
| gray/1000    | --color-gray-1000    | #161c1c |
| gray/1050    | --color-gray-1050    | #0f172a |

> ⚠️ Figma에 `gray/100`(#ffffff)과 `Gray/100`(#f9fafb)이 공존 — kebab-case 변환 시 이름이 충돌하여 후자는 `-alt` 접미사 처리. Figma에서 변수명 정리 권장.

### Blue (17개)

| Figma 변수명 | CSS Property     | 값      |
| ------------ | ---------------- | ------- |
| blue/20      | --color-blue-20  | #f7faff |
| blue/50      | --color-blue-50  | #eff6ff |
| blue/100     | --color-blue-100 | #f1f8fe |
| blue/120     | --color-blue-120 | #dbeafe |
| blue/200     | --color-blue-200 | #b8dcfc |
| blue/280     | --color-blue-280 | #93c5fd |
| blue/300     | --color-blue-300 | #91caff |
| blue/400     | --color-blue-400 | #69b1ff |
| blue/440     | --color-blue-440 | #63a3fb |
| blue/500     | --color-blue-500 | #4096ff |
| blue/540     | --color-blue-540 | #3b82f6 |
| blue/600     | --color-blue-600 | #1289f6 |
| blue/680     | --color-blue-680 | #1d4ed8 |
| blue/700     | --color-blue-700 | #0958d9 |
| blue/800     | --color-blue-800 | #003eb3 |
| blue/900     | --color-blue-900 | #002c8c |
| blue/1000    | --color-blue-1000 | #001d66 |

### Red (10개)

| Figma 변수명 | CSS Property     | 값      |
| ------------ | ---------------- | ------- |
| red/100      | --color-red-100  | #fffbfc |
| red/200      | --color-red-200  | #fff2f5 |
| red/300      | --color-red-300  | #ffccc7 |
| red/400      | --color-red-400  | #ffa39e |
| red/500      | --color-red-500  | #ff4d4f |
| red/600      | --color-red-600  | #fc2a55 |
| red/700      | --color-red-700  | #cf1322 |
| red/800      | --color-red-800  | #a8071a |
| red/900      | --color-red-900  | #820014 |
| red/1000     | --color-red-1000 | #5c0011 |

## 색상 — Semantic (26개)

| Figma 변수명               | CSS Property                         | 값 (참조)                        | 용도               |
| -------------------------- | ------------------------------------ | -------------------------------- | ------------------ |
| text/primary               | --color-text-primary                 | var(--color-gray-1000) #161c1c   | 주요 텍스트        |
| text/secondary             | --color-text-secondary               | var(--color-gray-600) #6b7280    | 보조 텍스트        |
| text/tertiary              | --color-text-tertiary                | var(--color-gray-500) #9ca3af    | 3차 텍스트         |
| text/disabled              | --color-text-disabled                | var(--color-gray-400) #d1d5db    | 비활성 텍스트      |
| text/onbrand               | --color-text-onbrand                 | var(--color-gray-100) #ffffff    | 브랜드 위 텍스트   |
| text/Danger                | --color-text-danger                  | var(--color-red-600) #fc2a55     | 위험 텍스트        |
| background/default         | --color-background-default           | var(--color-gray-100) #ffffff    | 기본 배경          |
| background/Subtle          | --color-background-subtle            | var(--color-gray-200) #fafafa    | 옅은 배경          |
| background/muted           | --color-background-muted             | var(--color-gray-300) #f5f7fa    | 음소거 배경        |
| background/brand           | --color-background-brand             | var(--color-blue-600) #1289f6    | 브랜드 배경        |
| background/brandsubtle     | --color-background-brandsubtle       | var(--color-blue-100) #f1f8fe    | 옅은 브랜드 배경   |
| background/danger          | --color-background-danger            | var(--color-red-200) #fff2f5     | 위험 배경          |
| background/dangersubtle    | --color-background-dangersubtle      | var(--color-red-100) #fffbfc     | 옅은 위험 배경     |
| border/default             | --color-border-default               | var(--color-gray-400) #d1d5db    | 기본 보더          |
| border/strong              | --color-border-strong                | var(--color-gray-700) #4b5563    | 강조 보더          |
| border/brand               | --color-border-brand                 | var(--color-blue-600) #1289f6    | 브랜드 보더        |
| border/danger              | --color-border-danger                | var(--color-red-600) #fc2a55     | 위험 보더          |
| content/default            | --color-content-default              | var(--color-gray-800) #374151    | 기본 콘텐츠        |
| content/strong             | --color-content-strong               | var(--color-gray-900) #262626    | 강조 콘텐츠        |
| content/muted              | --color-content-muted                | var(--color-gray-700) #4b5563    | 음소거 콘텐츠      |
| brand/primary              | --color-brand-primary                | var(--color-blue-600) #1289f6    | 브랜드 메인        |
| interactive/primary        | --color-interactive-primary          | var(--color-blue-600) #1289f6    | 주요 인터랙션      |
| interactive/primaryhover   | --color-interactive-primaryhover     | var(--color-blue-700) #0958d9    | 주요 인터랙션 hover |
| interactive/destructive    | --color-interactive-destructive      | var(--color-red-600) #fc2a55     | 파괴적 액션        |
| interactive/destructivehover | --color-interactive-destructivehover | var(--color-red-700) #cf1322   | 파괴적 액션 hover  |

## 스페이싱 (11개)

| Figma 변수명 | CSS Property | 값   |
| ------------ | ------------ | ---- |
| spacing/0    | --spacing-0  | 0px  |
| spacing/2    | --spacing-2  | 2px  |
| spacing/4    | --spacing-4  | 4px  |
| spacing/8    | --spacing-8  | 8px  |
| spacing/12   | --spacing-12 | 12px |
| spacing/16   | --spacing-16 | 16px |
| spacing/24   | --spacing-24 | 24px |
| spacing/32   | --spacing-32 | 32px |
| spacing/40   | --spacing-40 | 40px |
| spacing/48   | --spacing-48 | 48px |
| spacing/64   | --spacing-64 | 64px |

## Radius (9개)

| Figma 변수명  | CSS Property    | 값     |
| ------------- | --------------- | ------ |
| radius/none   | --radius-none   | 0px    |
| radius/xs     | --radius-xs     | 2px    |
| radius/sm     | --radius-sm     | 4px    |
| radius/md     | --radius-md     | 8px    |
| radius/lg     | --radius-lg     | 12px   |
| radius/xl     | --radius-xl     | 16px   |
| radius/2xl    | --radius-2xl    | 24px   |
| radius/3xl    | --radius-3xl    | 32px   |
| radius/circle | --radius-circle | 9999px |

## 타이포그래피 — Primitive (22개)

| Figma 변수명                       | CSS Property                | 값                        |
| ---------------------------------- | --------------------------- | ------------------------- |
| typography/font family/font family | --typography-font-family    | 'Pretendard'              |
| typography/size/12 ~ 32            | --typography-size-{12,13,14,16,18,20,24,32} | 12px ~ 32px |
| Size/Caption                       | --size-caption              | var(--typography-size-13) |
| Size/Title                         | --size-title                | var(--typography-size-18) |
| typography/line height/18 ~ 48     | --typography-line-height-{18,20,21,24,27,30,36,48} | 18px ~ 48px |
| typography/font weight/regular     | --typography-font-weight-regular | 400                  |
| typography/font weight/medium      | --typography-font-weight-medium  | 500                  |
| typography/font weight/bold        | --typography-font-weight-bold    | 700                  |

## 타이포그래피 — Text Styles (18개)

font shorthand로 정의. 사용법: `font: var(--body-lg-regular);`

| Figma 스타일       | CSS Property         | size / line-height / weight |
| ------------------ | -------------------- | --------------------------- |
| display/lg/bold    | --display-lg-bold    | 32px / 48px / 700           |
| display/lg/regular | --display-lg-regular | 32px / 48px / 400           |
| display/sm/bold    | --display-sm-bold    | 24px / 36px / 700           |
| display/sm/regular | --display-sm-regular | 24px / 36px / 400           |
| title/lg/bold      | --title-lg-bold      | 20px / 30px / 700           |
| title/lg/regular   | --title-lg-regular   | 20px / 30px / 400           |
| title/sm/bold      | --title-sm-bold      | 18px(Size/Title) / 27px / 700 |
| title/sm/regular   | --title-sm-regular   | 18px / 27px / 400           |
| body/lg/bold       | --body-lg-bold       | 16px / 24px / 700           |
| body/lg/regular    | --body-lg-regular    | 16px / 24px / 400           |
| body/sm/bold       | --body-sm-bold       | 14px / 21px / 700           |
| body/sm/regular    | --body-sm-regular    | 14px / 21px / 400           |
| caption/lg/bold    | --caption-lg-bold    | 13px / 20px / 700           |
| caption/lg/medium  | --caption-lg-medium  | 13px(Size/Caption) / 20px / 500 |
| caption/lg/regular | --caption-lg-regular | 13px / 20px / 400           |
| caption/sm/bold    | --caption-sm-bold    | 12px / 18px / 700           |
| caption/sm/medium  | --caption-sm-medium  | 12px / 18px / 500           |
| caption/sm/regular | --caption-sm-regular | 12px / 18px / 400           |

## Legacy aliases (Figma에 없음 — 기존 코드 호환용, 삭제 금지)

| CSS Property           | 참조 / 값                                  | 비고                                  |
| ---------------------- | ------------------------------------------ | ------------------------------------- |
| --primitive-white      | var(--color-gray-100)                      |                                       |
| --primitive-gray-50    | var(--color-gray-100-alt)                  |                                       |
| --primitive-gray-200   | var(--color-gray-360)                      |                                       |
| --primitive-gray-500   | var(--color-gray-600)                      |                                       |
| --primitive-gray-900   | #111827                                    | ⚠️ Figma 매칭 없음                    |
| --primitive-blue-500   | var(--color-blue-540)                      |                                       |
| --primitive-green-500  | #22c55e                                    | ⚠️ Figma에 green 없음                 |
| --primitive-red-500    | #ef4444                                    | ⚠️ Figma 매칭 없음                    |
| --color-bg-primary     | var(--color-background-default)            |                                       |
| --color-bg-secondary   | var(--primitive-gray-50)                   |                                       |
| --color-status-success | var(--primitive-green-500)                 | ⚠️ Figma에 success 토큰 없음          |
| --color-status-error   | var(--primitive-red-500)                   | ⚠️ Figma에 error 토큰 없음            |
| --spacing-xs ~ 2xl     | var(--spacing-4/8/12/16/24/32)             |                                       |
| --radius-full          | var(--radius-circle)                       |                                       |
| --font-family-sans     | var(--typography-font-family), sans-serif  | ⚠️ Inter → Pretendard로 값 변경       |
| --text-sm/base/lg      | var(--typography-size-14/16/18)            |                                       |
| --font-weight-medium   | var(--typography-font-weight-medium)       |                                       |
| --font-weight-semibold | 600                                        | ⚠️ Figma에 600 weight 없음            |
| --shadow-sm / --shadow-md | 기존 값 유지                            | ⚠️ Figma에 shadow 변수 없음           |

## Claude용 규칙

1. Figma MCP가 hex 색상 반환 → 이 테이블에서 찾아서 `var(--color-*)` 사용
2. Figma가 스페이싱 숫자 반환 → `var(--spacing-*)` 매핑
3. 타이포그래피는 text style 토큰(`font: var(--body-lg-regular)`) 우선 사용
4. 테이블에 없는 값 → 새 변수 만들지 말고 `/* ⚠️ 누락된 토큰 */` 플래그
