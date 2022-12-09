// load global styles
import '!style-loader!css-loader!sass-loader!../src/assets/scss/global.scss'
import { withThemeProvider } from './withThemeProvider'

export const decorators = [withThemeProvider]
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
