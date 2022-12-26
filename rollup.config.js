import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import image from '@rollup/plugin-image'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import copy from 'rollup-plugin-copy'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { fileURLToPath } from 'url'

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
          [
            'sass',
            {
              includePaths: [path.join(__dirname, 'src')],
            },
          ],
        ],
        extensions: ['.scss'],
      }),
      image({
        include: 'src/**',
        exclude: 'node_modules/**',
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
      }),
      copy({
        targets: [{ src: 'src/assets/material-ui.d.ts', dest: 'dist/assets/material-ui.d.ts' }],
      }),
    ],
    external: [/node_modules/],
  },
]
