import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const LIGHT_CODE = `
// Light Theme Colors
const lightTheme = {
  label: 'Light',

  colors: {
    // Brand
    primary: '#818DF9',

    // Text hierarchy
    text: '#272D34',
    text2: '#4A5159',
    text3: '#6E7680',
    text4: '#9AA1AC',

    // Backgrounds
    mainBG: '#F4F5FE',
    overlayBG: '#FFFFFF',
    backdrop: '#383E44',
    shadow: 'rgba(39, 45, 52, 0.15)',
    transparent: 'rgba(255, 255, 255, 0)',
    divider: '#e0e0e0',

    // Accent colors
    blue: '#4DA3FF',
    yellow: '#FFD93B',
    green: '#4CAF50',
    purple: '#9B59B6',
    orange: '#FF7F50',
    cyan: '#00BCD4',
    red: '#E74C3C',
    navy: '#34495E',
    indigo: '#5C6BC0',
    gray: '#B0BEC5',
    brown: '#8D6E63',
    lylac: '#B39DDB',
    pink: '#F48FB1',
  },
}
`

const DARK_CODE = `
// Dark Theme Colors
const darkTheme = {
  label: 'Dark',

  colors: {
    // Brand
    primary: '#818DF9',

    // Text hierarchy
    text: '#FFFFFF',
    text2: '#E0E0E0',
    text3: '#B0B0B0',
    text4: '#8A8A8A',

    // Backgrounds
    mainBG: '#383E44',
    overlayBG: '#272D34',
    backdrop: '#383E44',
    shadow: 'rgba(216, 210, 203, 0.1)',
    transparent: 'rgba(0, 0, 0, 0)',
    divider: '#383E44',

    // Accent colors
    blue: '#4DA3FF',
    yellow: '#FFD93B',
    green: '#4CAF50',
    purple: '#9B59B6',
    orange: '#FF7F50',
    cyan: '#00BCD4',
    red: '#E74C3C',
    navy: '#34495E',
    indigo: '#5C6BC0',
    gray: '#9E9E9E',
    brown: '#8D6E63',
    lylac: '#B39DDB',
    pink: '#F48FB1',
  },
}
`

const SCALES_CODE = `
// Spacing, Radius, Heights, and Text scales
const baseTheme = {
  spaces: {
    xxxs: 1,
    xxs: 3,
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 30,
    xxl: 40,
    xxxl: 50,
  },

  radius: {
    xxxs: 4,
    xxs: 5,
    xs: 5,
    sm: 7,
    md: 8,
    lg: 10,
    xl: 12,
    xxl: 15,
    xxxl: 18,
  },

  elementHeights: {
    xxxs: 10,
    xxs: 15,
    xs: 25,
    sm: 35,
    md: 40,
    lg: 45,
    xl: 50,
    xxl: 60,
    xxxl: 70,
  },

  texts: {
    h1: { fontSize: 35, strong: true },
    h2: { fontSize: 28, strong: true },
    h3: { fontSize: 26, strong: true },
    h4: { fontSize: 22, strong: true },
    h5: { fontSize: 18, strong: true },
    h6: { fontSize: 16, strong: true },
    p: { fontSize: 14 },
    sm: { fontSize: 12 },
    xs: { fontSize: 10 },
    xxs: { fontSize: 8 },
  },
}
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Theme Structure</Text>
      <Text text3>A theme contains colors, spaces, radius, element heights, and text styles. Here are the complete default values.</Text>
      <CodeBlock code={LIGHT_CODE} />
      <CodeBlock code={DARK_CODE} />
      <CodeBlock code={SCALES_CODE} />
    </View>
  )
}
