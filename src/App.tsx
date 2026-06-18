import type { CSSProperties } from 'react'

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  gap: 'var(--spacing-16)',
  backgroundColor: 'var(--color-bg-primary)',
  fontFamily: 'var(--font-family-sans)',
}

const titleStyle: CSSProperties = {
  fontSize: 'var(--display-lg-bold-font-size)',
  fontWeight: 'var(--display-lg-bold-font-weight)',
  lineHeight: 'var(--display-lg-bold-line-height)',
  color: 'var(--color-text-primary)',
}

const descStyle: CSSProperties = {
  fontSize: 'var(--body-md-regular-font-size)',
  color: 'var(--color-text-secondary)',
}

/**
 * 실습용 프로젝트 시작 화면.
 * 토큰과 컴포넌트가 준비되어 있습니다.
 * 이 파일을 수정해서 페이지를 만들어보세요!
 */
export function App() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>피그마피디아 디자인 시스템</h1>
      <p style={descStyle}>
        토큰과 컴포넌트가 준비되어 있습니다. 페이지를 만들어보세요!
      </p>
    </div>
  )
}
