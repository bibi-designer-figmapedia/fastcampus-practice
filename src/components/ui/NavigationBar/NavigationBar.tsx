import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'
import { Category } from '../Category'
import { ButtonMedium } from '../Button'

/** Auth state. Maps 1:1 to the Figma `state` variant — only the right-side button label changes. */
export type NavigationBarState = 'login' | 'logout'

/** Button label per state. `login` → 로그인, `logout` → 로그아웃 (matches the Figma frame). */
const AUTH_LABEL: Record<NavigationBarState, string> = {
  login: '로그인',
  logout: '로그아웃',
}

export interface NavigationBarProps {
  /** Auth state. Toggles the right-side button label. Defaults to `login`. */
  state?: NavigationBarState
  /** Selected category label shown on the left. Defaults to `커뮤니티`. */
  category?: ReactNode
  /** Click handler for the category tab. */
  onCategoryClick?: MouseEventHandler<HTMLButtonElement>
  /** Click handler for the auth (login/logout) button. */
  onAuthClick?: MouseEventHandler<HTMLButtonElement>
  /** Extra class forwarded to the root `<nav>`. */
  className?: string
}

/**
 * Top navigation bar: a selected `Category` tab on the left and a `corelight`
 * `ButtonMedium` auth action on the right, separated by `justify-content: space-between`.
 *
 * The root stretches to `width: 100%` with a bottom hairline border
 * (`--color-background-muted`); the inner row is capped at `max-width: 840px` so the
 * content stays centred and readable on wide viewports while remaining fluid below it.
 */
export function NavigationBar({
  state = 'login',
  category = '커뮤니티',
  onCategoryClick,
  onAuthClick,
  className,
}: NavigationBarProps) {
  const rootStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    width: '100%',
    paddingTop: 'var(--spacing-16)',
    // ⚠️ 토큰 외 값(10px): spacing 스케일이 8→12로 건너뛰어 대응 토큰이 없음.
    // 사용자 승인하에 Figma 원본과 1:1 일치를 위해 직접 지정. (Category 6px/10px 선례와 동일)
    paddingInline: '10px',
    borderBottom: '1px solid var(--color-background-muted)',
  }

  const rowStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: 840,
    // ⚠️ 토큰 외 값(2px): 대응 spacing 토큰 없음. Figma 원본 일치를 위해 직접 지정.
    paddingTop: '2px',
    overflowX: 'auto',
  }

  return (
    <nav aria-label="주요 메뉴" className={className} style={rootStyle}>
      <div style={rowStyle}>
        <Category state="selected" onClick={onCategoryClick}>
          {category}
        </Category>
        <ButtonMedium style="corelight" onClick={onAuthClick}>
          {AUTH_LABEL[state]}
        </ButtonMedium>
      </div>
    </nav>
  )
}
