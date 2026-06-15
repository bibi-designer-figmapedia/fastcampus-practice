// .claude/hooks/check-design-tokens.mjs
// PostToolUse hook: 하드코딩된 디자인 값 감지 → Claude에 피드백
// Node.js 기반이라 Windows/macOS/Linux 모두 동작

import { readFileSync } from 'fs'
import { extname } from 'path'

const input = JSON.parse(
  readFileSync('/dev/stdin', 'utf8').catch?.() ?? process.argv[2] ?? '{}',
)

// stdin에서 읽기 (cross-platform)
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

// 검사 제외 대상
const ext = extname(filePath)
const skipPatterns = ['.css', '.json', '.svg']
const skipPaths = [
  'tokens/',
  'tailwind.config',
  '.test.',
  '.spec.',
  'node_modules',
]

if (skipPatterns.includes(ext)) process.exit(0)
if (skipPaths.some((p) => filePath.includes(p))) process.exit(0)
if (!['.ts', '.tsx', '.js', '.jsx'].includes(ext)) process.exit(0)

// 파일 읽기
let content
try {
  content = readFileSync(filePath, 'utf8')
} catch {
  process.exit(0)
}

const lines = content.split('\n')
const violations = []

lines.forEach((line, i) => {
  const lineNum = i + 1
  // 주석 라인 스킵
  if (line.trim().startsWith('//') || line.trim().startsWith('*')) return

  // hex 색상 감지
  if (/#[0-9a-fA-F]{3,8}\b/.test(line)) {
    violations.push(`L${lineNum}: ${line.trim()}`)
  }
  // rgb/rgba/hsl 감지
  if (/(?:rgb|rgba|hsl)\(/.test(line)) {
    violations.push(`L${lineNum}: ${line.trim()}`)
  }
})

if (violations.length > 0) {
  const msg = violations.slice(0, 5).join(' | ')
  const output = {
    additionalContext: `⚠️ 하드코딩된 색상값 발견: ${filePath} — ${msg} → src/tokens/의 토큰을 사용하세요.`,
  }
  process.stdout.write(JSON.stringify(output))
}

process.exit(0)
