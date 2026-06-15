// .claude/hooks/notify.mjs
// Notification hook: Claude가 입력 대기 시 OS 알림
// macOS: osascript, Windows: PowerShell, Linux: notify-send
// Node.js 기반이라 OS 자동 감지

import { execSync } from 'child_process'
import { platform } from 'os'

const os = platform()

try {
  if (os === 'darwin') {
    // macOS
    execSync(
      `osascript -e 'display notification "Claude Code 입력 대기 중" with title "Claude Code"'`,
    )
  } else if (os === 'win32') {
    // Windows
    execSync(
      `powershell -Command "[System.Reflection.Assembly]::LoadWithPartialName('System.Windows.Forms'); [System.Windows.Forms.MessageBox]::Show('Claude Code 입력 대기 중','Claude Code','OK','Information')" `,
      { stdio: 'ignore' },
    )
  } else {
    // Linux
    execSync(`notify-send "Claude Code" "Claude Code 입력 대기 중"`, {
      stdio: 'ignore',
    })
  }
} catch {
  // 알림 실패해도 무시 (hook이 작업을 차단하면 안 됨)
}

process.exit(0)
