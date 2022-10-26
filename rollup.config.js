import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import external from 'rollup-plugin-peer-deps-external'
import svg from 'rollup-plugin-svg-import';
import { terser } from 'rollup-plugin-terser'
import { fileURLToPath } from 'url'
import image from 'rollup-plugin-img';
import postcss from 'rollup-plugin-postcss'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      // Resolve all teh alias as bundle time
      alias({
        entries: [
          {
            find: '@assets',
            replacement: path.resolve(__dirname, './src/assets'),
          },
          {
            find: '@components',
            replacement: path.resolve(__dirname, './src/components'),
          },
          {
            find: '@businessLogic',
            replacement: path.resolve(__dirname, './src/business-logic'),
          },
        ],
      }),
      postcss({
        extract: true,
        modules: false,
        use: [
          ['sass', {
            includePaths: [path.join(__dirname, 'src')]
          }]
        ],
        extensions: ['.scss'],
      }),
      image({
        output: 'dist/assets',
        extensions: /\.(png|jpg|jpeg|gif|svg)$/,
        limit: 10000
      }),
      svg({
        stringify: false
      }),
      // TS
      typescript({
        sourceMap: true,
      }),
      resolve(),
      external(),
      terser(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      })
    ],
    external: [/node_modules/],
  },
]
