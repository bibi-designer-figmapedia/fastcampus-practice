import type { CSSProperties, MouseEventHandler } from 'react'
import { ButtonMedium } from '../Button'

export interface LoginGoogleProps {
  /** 버튼 라벨 텍스트. */
  text?: string
  /**
   * 컴포넌트 너비. 기본값은 `'100%'`로 컨테이너에 맞춰 늘어납니다.
   * Figma 프레임(345px)을 그대로 재현하려면 `'345px'`를 전달하세요.
   */
  width?: string
  /** 구글 로그인 버튼 클릭 핸들러. */
  onClick?: MouseEventHandler<HTMLButtonElement>
  /** 루트 요소에 전달되는 추가 클래스. */
  className?: string
}

/**
 * "구글로 로그인 하기" 버튼 합성 컴포넌트 (Figma node 783:4199).
 *
 * 시각·타이포·간격은 재사용 `ButtonMedium`의 `monolight` 스타일이 그대로 충족합니다.
 * (배경 `--color-background-muted` #f5f7fa / 라벨 `--color-content-strong` #262626 /
 * py `--spacing-12` · px `--spacing-16` / 아이콘-라벨 gap `--spacing-8` /
 * 모서리 `--radius-md` / 라벨 `--body-sm-bold` 14px·21px·700 — 전부 Figma 스펙과 1:1.)
 * 구글 로고는 디자인 시스템 `Icon`의 `google`(브랜드 컬러 고정)을 ButtonMedium의
 * `icon` prop으로 재사용합니다(별도 에셋 다운로드 불필요).
 *
 * 자체 스타일은 외곽 세로 프레임(`w-345`·`gap-2`)과 버튼 풀-width 확장만 소유하며
 * 모두 디자인 토큰으로 처리합니다.
 */
export function LoginGoogle({
  text = '구글로 로그인 하기',
  width = '100%',
  onClick,
  className,
}: LoginGoogleProps) {
  const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-2)',
    width,
  }

  return (
    <div className={className} style={rootStyle}>
      <ButtonMedium
        style="monolight"
        icon="google"
        onClick={onClick}
        className="login-google__button"
      >
        {text}
      </ButtonMedium>
      {/*
        ButtonMedium은 인라인 style로만 스타일링하며 width prop이 없으므로,
        Figma의 w-full을 구현하기 위해 className으로 width:100%만 보강한다.
        토큰이 아닌 100%는 레이아웃 값(색·간격 아님)이라 토큰 대상이 아니다.
      */}
      <style>{`.login-google__button { width: 100%; }`}</style>
    </div>
  )
}
