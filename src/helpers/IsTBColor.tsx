import { TBColor } from '@assets/defaultTheme'
import colors from '@assets/scss/variables/_color.variables.module.scss'

export default function colorStringIsTBColor(color: string): color is TBColor {
  return colors[color as TBColor] !== undefined
}
