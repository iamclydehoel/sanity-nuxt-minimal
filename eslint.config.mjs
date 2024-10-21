// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  vue: {
    overrides: {
      'vue/no-restricted-syntax':
        ['error', {
          selector: 'VElement[name=\'a\']',
          message: 'Use NuxtLink instead.',
        }],
    },
  },
  formatters: {
    css: true,
  },
}, {
  rules: {
    'node/prefer-global/process': 'off',
  },
})
