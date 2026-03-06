import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
// Spacing
padding, paddingH, paddingV, paddingT, paddingB, paddingL, paddingR
margin, marginH, marginV, marginT, marginB, marginL, marginR
gap

// Layout (Flex)
row, center, centerV, centerH, toRight, toLeft, toTop, toBottom
flex, wrap, justify, align, direction

// Size
width, height, minW, maxW, minH, maxH
fullW, fullH, ratio, square, span

// Background
bg, colors (for gradients), angle

// Border
br, brT, brB, brL, brR, round
border, borderT, borderB, borderL, borderR, borderColor

// Position
absolute, relative, fixed, sticky
absoluteFill, fixedFill
top, bottom, left, right, zIndex

// Shadow
shadow

// Overflow
scroll, scrollX, scrollY, hiddenOverflow, noScroll

// Text (on Text component)
h1, h2, h3, h4, h5, h6, p, sm, xs
bold, strong, italic, underline
center, toRight
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Available Modifiers</Text>
      <Text text3>
        Here is a quick reference of all available modifiers. See the individual guide pages for detailed usage.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
