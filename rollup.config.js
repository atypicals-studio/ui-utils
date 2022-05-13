import cleaner from 'rollup-plugin-cleaner'

export default [
  {
    input: 'src/jest/index.js',
    output: {
      file: 'dist/jest.js',
      format: 'cjs',
    },
    plugins: [
      cleaner({
        targets: ['dist'],
      }),
    ],
  },
  {
    input: 'src/responsive/index.js',
    output: {
      file: 'dist/responsive.js',
      format: 'cjs',
    },
  },
  {
    input: 'src/color.js',
    output: {
      file: 'dist/color.js',
      format: 'cjs',
    },
  },
  {
    input: 'src/date.js',
    output: {
      file: 'dist/date.js',
      format: 'cjs',
    },
  },
  {
    input: 'src/formatting.js',
    output: {
      file: 'dist/formatting.js',
      format: 'cjs',
    },
  },
  {
    input: 'src/use-file-export.js',
    output: {
      file: 'dist/file.js',
      format: 'cjs',
    },
  },
  {
    input: 'src/use-query-string.js',
    output: {
      file: 'dist/url.js',
      format: 'cjs',
    },
  },
  {
    input: 'src/validation.js',
    output: {
      file: 'dist/validation.js',
      format: 'cjs',
    },
  },
]
