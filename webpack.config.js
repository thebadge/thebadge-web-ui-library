// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.ts',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: { modules: true },
          },
          'style-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: path.resolve(__dirname, './src/assets'),
        loader: 'file-loader?name=assets/[name].[ext]',
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/*'),
      '@assets': path.resolve(__dirname, './src/assets/*'),
    },
  },
}
