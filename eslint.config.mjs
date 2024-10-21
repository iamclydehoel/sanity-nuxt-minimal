// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    css: true,
  },
}, {
  rules: {
    'node/prefer-global/process': 'off',
  },
})
