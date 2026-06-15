---
name: verify-design
description: '생성된 UI 코드가 디자인 토큰을 올바르게 사용하는지 검증.'
---

# 디자인 토큰 준수 검증

## 사용 시점

- Figma 컴포넌트 구현 직후
- `/design-audit` 명령어에서 호출

## 절차

1. 대상 파일에서 하드코딩된 값 검사:
   - hex 색상 (#xxx), rgb(), rgba(), hsl()
   - px 단위 직접 스페이싱 (1px border는 허용)
   - font-size 직접 px값
2. 위반 시 파일명, 줄 번호, 대체 토큰 보고
3. 통과 시 "✅ 디자인 토큰 준수: 통과" 출력

## 제외 대상

- tailwind.config._, src/tokens/, _.svg, _.test._, \*.css, node_modules/
