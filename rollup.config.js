import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { extractICSS } from 'icss-utils'
import path from 'path'
import postcss from 'postcss'
import external from 'rollup-plugin-peer-deps-external'
import sass from 'rollup-plugin-sass'
import svg from 'rollup-plugin-svg'
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
      // TS
      typescript({
        sourceMap: true,
      }),
      // Loader for .scss files
      sass({
        processor: (css) =>
          new Promise((resolve, reject) => {
            const pcssRootNodeRslt = postcss.parse(css),
              extractedIcss = extractICSS(pcssRootNodeRslt, true),
              cleanedCss = pcssRootNodeRslt.toString(),
              out = Object.assign({}, extractedIcss.icssExports, {
                css: cleanedCss,
              })
            // console.table(extractedIcss);
            //console.log(out)
            resolve(out)
          }),
        /* options: {
          outputStyle: 'compressed',
        }, */
        output: 'dist/styles.css',
      }),
      // Loader for .svg
      svg(),
      resolve(),
      external(),
      terser(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
    ],
    external: [/node_modules/],
  },
]
