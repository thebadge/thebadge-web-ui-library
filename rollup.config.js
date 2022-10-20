import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import fs from 'fs'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'))

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      typescriptPaths(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
    ],
    // Mark package dependencies as "external".
    external: Object.keys(packageJson.dependencies),
  },
  {
    input: 'lib/esm/index.d.ts',
    output: [{ file: 'lib/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
]
