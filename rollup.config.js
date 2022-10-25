import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import fs from 'fs'
import path from 'path'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'
import alias from '@rollup/plugin-alias'
import scss from 'rollup-plugin-scss'
import svg from 'rollup-plugin-svg'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'))


function emitModulePackageFile() {
  return {
    name: 'emit-module-package-file',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'package.json',
        source: `{ "name": "${packageJson.name}", "version": "${packageJson.version}", "type": "module"}`
      });
    }
  };
}

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
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
      typescript({ tsconfig: './tsconfig.json' }),
      typescriptPaths(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
      scss({
        insert: true,
      }),
      svg(),
      dts,
      emitModulePackageFile()
    ],
    // Mark package dependencies as "external".
    external: Object.keys(packageJson.dependencies),
  },
]
