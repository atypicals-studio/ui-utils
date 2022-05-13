import cleaner from 'rollup-plugin-cleaner'

export default [
  {
    input: 'src/jest/index.js',
    output: {
      file: 'dist/jest/index.js',
      format: 'cjs',
      sourcemap: true,
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
      file: 'dist/responsive/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  },
  {
    input: 'src/color.js',
    output: {
      file: 'dist/color/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  },
  {
    input: 'src/date.js',
    output: {
      file: 'dist/date/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  },
  {
    input: 'src/formatting.js',
    output: {
      file: 'dist/formatting/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  },
  {
    input: 'src/use-file-export.js',
    output: {
      file: 'dist/file/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  },
  {
    input: 'src/use-query-string.js',
    output: {
      file: 'dist/url/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  },
  {
    input: 'src/validation.js',
    output: {
      file: 'dist/validation/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  },
]
