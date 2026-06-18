---
name: gen-stories
description: '컴포넌트 Props를 분석해서 Storybook CSF3 story를 자동 생성.'
---

# Storybook Story 자동 생성

## 사용 시점

- `/gen-story`, `/gen-all-stories` 커맨드에서 호출
- 컴포넌트 구현 후 story 생성 시

## 절차

1. 컴포넌트 Props 인터페이스 분석
2. Union type → variant별 story, Boolean → 상태별 story 자동 감지
3. CSF3 + TypeScript + `satisfies Meta` + autodocs 태그
4. argTypes에 모든 public props 매핑
5. play function 최소 1개 포함 (`@storybook/test`에서 import)

## title 규칙

- src/components/ui/ → 'Components/컴포넌트명'
- src/stories/tokens/ → 'Tokens/토큰명'
