---
name: sync-tokens
description: 'Figma 변수와 코드 CSS custom properties 간 불일치를 감지하고 보고.'
---

# 디자인 토큰 동기화 확인

## 사용 시점

- `/check-tokens` 명령어에서 호출
- 디자인 시스템 업데이트 후

## 절차

1. Figma MCP `get_variable_defs`로 변수 가져오기
2. `src/tokens/*.css`의 CSS custom properties 파싱
3. 비교 결과 분류:
   - 🆕 Figma에만 있는 변수 → 코드에 추가 필요
   - 🗑️ 코드에만 있는 토큰 → 삭제 고려
   - ⚠️ 값이 다른 토큰 → 확인 필요
4. Figma가 원본. 파일은 직접 수정하지 않고 보고만 함.
