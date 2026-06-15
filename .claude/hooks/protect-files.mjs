// .claude/hooks/protect-files.mjs
// PreToolUse hook: .env, lock 파일, .git 수정 차단
// exit code 2 = Claude의 도구 실행을 차단
// Node.js 기반이라 Windows/macOS/Linux 모두 동작

import { readFileSync } from 'fs'

let raw = ''
try {
  raw = readFileSync(0, 'utf8')
} catch {
  process.exit(0)
}

let data
try {
  data = JSON.parse(raw)
} catch {
  process.exit(0)
}

const filePath = data?.tool_input?.file_path ?? ''
if (!filePath) process.exit(0)

const blockedPatterns = [
  '.env',
  '.env.local',
  'package-lock.json',
  '.git/',
  '.git\\',
]

if (blockedPatterns.some((p) => filePath.includes(p))) {
  process.exit(2) // exit 2 = 차단
}

process.exit(0)
