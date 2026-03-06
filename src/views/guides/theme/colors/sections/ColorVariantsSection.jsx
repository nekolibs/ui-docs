import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View, Text } from '@neko-os/ui'

// Color variants are automatically generated for all theme colors

// Lighten variants (- in light mode, + in dark mode)
<View bg="primary-10" />  // Slightly lighter
<View bg="primary-20" />  // Lighter
<View bg="primary-30" />  // Even lighter
<View bg="red-40" />      // Maximum lighten

// Darken variants (+ in light mode, - in dark mode)
<View bg="primary+10" />  // Slightly darker
<View bg="primary+20" />  // Darker
<View bg="primary+30" />  // Even darker
<View bg="red+40" />      // Maximum darken

// Opacity variants (_op)
<View bg="primary_op10" />  // 10% opacity
<View bg="primary_op20" />  // 20% opacity
<View bg="primary_op50" />  // 50% opacity
<View bg="red_op70" />      // 70% opacity
<View bg="blue_op90" />     // 90% opacity

// Works with any color and any prop that accepts colors
<Text color="text3-20">Lighter text</Text>
<View borderColor="primary+30" />
<View shadow="primary_op30" />
`

const LIGHTEN_AMOUNTS = [10, 20, 30, 40]
const DARKEN_AMOUNTS = [10, 20, 30, 40]
const OPACITY_AMOUNTS = [10, 20, 30, 40, 50, 60, 70, 80, 90]

const SAMPLE_COLORS = ['primary', 'blue', 'red', 'green', 'orange', 'purple']

function VariantRow({ color, amounts, suffix, prefix }) {
  return (
    <View gap="xs">
      <Text text3 bold>
        {color}
      </Text>
      <View row wrap gap="sm" align="center">
        <View center gap="xxs">
          <View bg={color} height="xl" ratio={1} round border shadow />
          <Text text4 xxs center>
            base
          </Text>
        </View>
        {amounts.map((amount) => {
          const name = prefix ? `${color}${prefix}${amount}` : `${color}${suffix}${amount}`
          return (
            <View center gap="xxs" key={amount}>
              <View bg={name} height="xl" ratio={1} round border shadow />
              <Text text4 xxs center>
                {prefix || suffix}
                {amount}
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Color Variants</Text>
      <Text text3>
        All theme colors automatically get lighten, darken, and opacity variants. The +/- direction adapts to the theme
        (light or dark) for consistent visual results.
      </Text>
      <CodeBlock code={CODE} />

      <Text text2 bold>
        Lighten Variants
      </Text>
      <Text text3>Use - in light mode (+ in dark mode) to lighten colors. Available from 10 to 40.</Text>
      <View gap="lg">
        {SAMPLE_COLORS.map((color) => (
          <VariantRow key={color} color={color} amounts={LIGHTEN_AMOUNTS} suffix="-" />
        ))}
      </View>

      <Text text2 bold marginT="lg">
        Darken Variants
      </Text>
      <Text text3>Use + in light mode (- in dark mode) to darken colors. Available from 10 to 40.</Text>
      <View gap="lg">
        {SAMPLE_COLORS.map((color) => (
          <VariantRow key={color} color={color} amounts={DARKEN_AMOUNTS} suffix="+" />
        ))}
      </View>

      <Text text2 bold marginT="lg">
        Opacity Variants
      </Text>
      <Text text3>Use _op to set opacity. Available from 10 to 90.</Text>
      <View gap="lg">
        {SAMPLE_COLORS.map((color) => (
          <VariantRow key={color} color={color} amounts={OPACITY_AMOUNTS} suffix="_op" />
        ))}
      </View>
    </View>
  )
}
