import type { CSSProperties, MouseEventHandler } from 'react'
import { Checkbox, type CheckboxState } from '../Checkbox'
import { ButtonSmall } from '../Button'

// ⚠️ 토큰 외 값(7px): spacing 스케일이 4→8로 건너뛰어 대응 토큰이 없음.
// Figma 원본(node 783:4157)의 체크박스–라벨 간격 7px과 1:1 일치를 위해 직접 지정.
const CHECKBOX_LABEL_GAP = '7px'

export interface LoginSetupProps {
  /** "로그인 유지" 라벨 텍스트. */
  label?: string
  /** 오른쪽 버튼 텍스트. */
  buttonText?: string
  /**
   * 컴포넌트 너비. 기본값은 `'100%'`로 컨테이너에 맞춰 늘어납니다.
   * Figma 프레임(297px)을 그대로 재현하려면 `'297px'`를 전달하세요.
   */
  width?: string
  /** 재사용하는 Checkbox의 시각 상태. 기본값 `'on'`. */
  checkboxState?: CheckboxState
  /** "비밀번호 찾기" 버튼 클릭 핸들러. */
  onButtonClick?: MouseEventHandler<HTMLButtonElement>
  /** 루트 요소에 전달되는 추가 클래스. */
  className?: string
}

/**
 * 로그인 화면의 "로그인 유지 / 비밀번호 찾기" 한 행 합성 컴포넌트.
 * 왼쪽은 재사용 Checkbox + 라벨, 오른쪽은 outline 스타일의 ButtonSmall로 구성됩니다.
 * 자체 스타일은 레이아웃·라벨 타이포만 소유하며 모두 디자인 토큰으로 처리합니다.
 */
export function LoginSetup({
  label = '로그인 유지',
  buttonText = '비밀번호 찾기',
  width = '100%',
  checkboxState = 'on',
  onButtonClick,
  className,
}: LoginSetupProps) {
  const rootStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width,
  }

  const leftGroupStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: CHECKBOX_LABEL_GAP,
    flexShrink: 0,
  }

  const labelStyle: CSSProperties = {
    margin: 0,
    font: 'var(--caption-lg-medium)',
    color: 'var(--color-content-strong)',
  }

  return (
    <div className={className} style={rootStyle}>
      <div style={leftGroupStyle}>
        <Checkbox state={checkboxState} />
        <p style={labelStyle}>{label}</p>
      </div>
      <ButtonSmall style="outline" onClick={onButtonClick}>
        {buttonText}
      </ButtonSmall>
    </div>
  )
}
