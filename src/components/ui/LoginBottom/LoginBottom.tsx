import type { CSSProperties, MouseEventHandler } from 'react'
import { LoginSetup } from '../LoginSetup'
import { LoginSign } from '../LoginSign'
import type { CheckboxState } from '../Checkbox'

export interface LoginBottomProps {
  /**
   * 컴포넌트 너비. 기본값은 `'100%'`로 컨테이너에 맞춰 늘어납니다.
   * Figma 프레임(320px)을 그대로 재현하려면 `'320px'`를 전달하세요.
   */
  width?: string
  /** "로그인 유지" 라벨 텍스트. 하위 LoginSetup으로 전달됩니다. */
  keepLoginLabel?: string
  /** 재사용 Checkbox의 시각 상태. 하위 LoginSetup으로 전달됩니다. 기본값 `'on'`. */
  checkboxState?: CheckboxState
  /** "비밀번호 찾기" 버튼 텍스트. 하위 LoginSetup으로 전달됩니다. */
  findPasswordText?: string
  /** "비밀번호 찾기" 버튼 클릭 핸들러. */
  onFindPassword?: MouseEventHandler<HTMLButtonElement>
  /** 회원가입 안내 문구. 하위 LoginSign으로 전달됩니다. */
  signText?: string
  /** "회원가입" 버튼 텍스트. 하위 LoginSign으로 전달됩니다. */
  signUpText?: string
  /** "회원가입" 버튼 클릭 핸들러. */
  onSignUp?: MouseEventHandler<HTMLButtonElement>
  /** 루트 요소에 전달되는 추가 클래스. */
  className?: string
}

/**
 * 로그인 화면 하단 영역 합성 컴포넌트.
 * 위쪽은 재사용 LoginSetup("로그인 유지 / 비밀번호 찾기" 행),
 * 아래쪽은 재사용 LoginSign("회원가입 안내" 블록)을 세로로 배치합니다.
 * 자체 스타일은 세로 레이아웃·간격만 소유하며 모두 디자인 토큰으로 처리합니다.
 * 시각·타이포는 두 하위 컴포넌트가 그대로 충족합니다.
 */
export function LoginBottom({
  width = '100%',
  keepLoginLabel,
  checkboxState,
  findPasswordText,
  onFindPassword,
  signText,
  signUpText,
  onSignUp,
  className,
}: LoginBottomProps) {
  const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 'var(--spacing-8)',
    width,
  }

  return (
    <div className={className} style={rootStyle}>
      <LoginSetup
        label={keepLoginLabel}
        checkboxState={checkboxState}
        buttonText={findPasswordText}
        onButtonClick={onFindPassword}
      />
      <LoginSign text={signText} buttonText={signUpText} onSignUp={onSignUp} />
    </div>
  )
}
