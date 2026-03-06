import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { View, Text, Button } from '@neko-os/ui'

// Using color names directly in components
<View bg="mainBG">
  <Text color="primary">Primary colored text</Text>
  <Text color="text3">Muted text</Text>
  <Button bg="green">Success</Button>
</View>
`

const BRAND_COLORS = [{ name: 'primary', label: 'Main brand color' }]

const TEXT_COLORS = [
  { name: 'text', label: 'Primary text' },
  { name: 'text2', label: 'Secondary text' },
  { name: 'text3', label: 'Muted text' },
  { name: 'text4', label: 'Disabled/hint text' },
]

const BG_COLORS = [
  { name: 'mainBG', label: 'Main app background' },
  { name: 'overlayBG', label: 'Cards, modals, popovers' },
  { name: 'backdrop', label: 'Modal/drawer backdrop' },
  { name: 'divider', label: 'Border and divider lines' },
  { name: 'shadow', label: 'Shadow color' },
]

const ACCENT_COLORS = [
  { name: 'blue', label: 'Blue' },
  { name: 'yellow', label: 'Yellow' },
  { name: 'green', label: 'Green' },
  { name: 'purple', label: 'Purple' },
  { name: 'orange', label: 'Orange' },
  { name: 'cyan', label: 'Cyan' },
  { name: 'red', label: 'Red' },
  { name: 'navy', label: 'Navy' },
  { name: 'indigo', label: 'Indigo' },
  { name: 'gray', label: 'Gray' },
  { name: 'brown', label: 'Brown' },
  { name: 'lylac', label: 'Lylac' },
  { name: 'pink', label: 'Pink' },
]

function ColorSwatch({ name, label }) {
  return (
    <View center gap="sm">
      <View bg={name} height="xxl" ratio={1} round border shadow />
      <View center>
        <Text text3 bold center>
          {name}
        </Text>
        <Text text4 xs center>
          {label}
        </Text>
      </View>
    </View>
  )
}

function ColorGroup({ title, colors }) {
  return (
    <View gap="md">
      <Text text2 bold>
        {title}
      </Text>
      <View row gap="xl" wrap>
        {colors.map((c) => (
          <ColorSwatch key={c.name} name={c.name} label={c.label} />
        ))}
      </View>
    </View>
  )
}

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Colors</Text>
      <Text text3>
        Components accept color names directly as props. The theme provides semantic colors for consistent UI and accent
        colors for variety.
      </Text>
      <CodeBlock code={CODE} />
      <View gap="xxl">
        <ColorGroup title="Brand" colors={BRAND_COLORS} />
        <ColorGroup title="Text Hierarchy" colors={TEXT_COLORS} />
        <ColorGroup title="Backgrounds" colors={BG_COLORS} />
        <ColorGroup title="Accent Colors" colors={ACCENT_COLORS} />
      </View>
    </View>
  )
}
