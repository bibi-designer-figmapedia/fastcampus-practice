import type { CSSProperties, MouseEventHandler } from 'react'
import { ButtonSmall } from '../Button'

export interface LoginSignProps {
  /** 안내 문구 텍스트. */
  text?: string
  /** 회원가입 버튼 라벨. */
  buttonText?: string
  /**
   * 컴포넌트 너비. 기본값은 `'100%'`로 컨테이너에 맞춰 늘어납니다.
   * Figma 프레임(185px)을 그대로 재현하려면 `'185px'`를 전달하세요.
   */
  width?: string
  /** "회원가입" 버튼 클릭 핸들러. */
  onSignUp?: MouseEventHandler<HTMLButtonElement>
  /** 루트 요소에 전달되는 추가 클래스. */
  className?: string
}

/**
 * 로그인 화면 하단의 "아직 회원이 아니세요? / 회원가입" 안내 블록 합성 컴포넌트.
 * 위쪽은 tertiary 안내 문구, 아래쪽은 `monolight` 스타일의 재사용 ButtonSmall로 구성됩니다.
 * 자체 스타일은 세로 레이아웃·안내문 타이포만 소유하며 모두 디자인 토큰으로 처리합니다.
 * (버튼의 배경 `--color-background-muted` / 라벨 `--color-content-strong` / 모서리
 * `--radius-md`는 ButtonSmall `monolight`이 그대로 충족합니다.)
 */
export function LoginSign({
  text = '아직 피그마피디아 회원이 아니세요?',
  buttonText = '회원가입',
  width = '100%',
  onSignUp,
  className,
}: LoginSignProps) {
  const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--spacing-8)',
    paddingTop: 'var(--spacing-12)',
    paddingBottom: 'var(--spacing-12)',
    width,
  }

  const textStyle: CSSProperties = {
    margin: 0,
    width: '100%',
    textAlign: 'center',
    font: 'var(--caption-lg-medium)',
    color: 'var(--color-text-tertiary)',
  }

  return (
    <div className={className} style={rootStyle}>
      <p style={textStyle}>{text}</p>
      <ButtonSmall style="monolight" onClick={onSignUp}>
        {buttonText}
      </ButtonSmall>
    </div>
  )
}
