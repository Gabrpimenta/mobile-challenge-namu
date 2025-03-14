// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, {
  files: ['.prettierrc.js', 'babel.config.js'],
  languageOptions: {
    sourceType: 'commonjs',
    globals: {
      module: 'readonly',
      exports: 'readonly',
      require: 'readonly',
      __filename: 'readonly',
      __dirname: 'readonly',
      process: 'readonly',
      console: 'readonly',
    },
  },
});
