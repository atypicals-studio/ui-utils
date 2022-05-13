const entryPoints = [
  'src/jest/index.js',
  'src/responsive/index.js',
  'src/color.js',
  'src/date.js',
  'src/formatting.js',
  'src/file.js',
  'src/url.js',
  'src/validation.js',
]

export default entryPoints.map((entryPoint) => ({
  input: entryPoint,
  output: {
    file: `dist/${entryPoint
      .replace('src/', '')
      .replace('/index.js', '')
      .replace('.js', '')}/index.js`,
    format: 'cjs',
    sourcemap: true,
  },
}))
