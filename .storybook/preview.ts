import type { Preview } from '@storybook/react'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // Foundation(토큰) 카테고리를 사이드바 상단에, 그 뒤 UI 컴포넌트.
      storySort: {
        order: ['Foundation', 'UI'],
      },
    },
  },
}

export default preview
