import { Card, Col, Icon, Row, Text, View } from '@neko-os/ui'

const FEATURES = [
  {
    icon: 'brush-line',
    title: 'Modifier-Based Styling',
    description: 'Props like padding="md", bg="primary" instead of CSS. Clean, readable, and type-safe.',
  },
  {
    icon: 'device-line',
    title: 'Cross-Platform',
    description: 'Same code runs on Web and React Native. Build once, deploy everywhere.',
  },
  {
    icon: 'palette-line',
    title: 'Theme System',
    description: 'Colors, spacing, and radius scales with auto-generated color variants and dark mode support.',
  },
  {
    icon: 'aspect-ratio-line',
    title: 'Responsive',
    description: 'Built-in breakpoints and responsive value support. Adapts to any screen size.',
  },
  {
    icon: 'layout-grid-line',
    title: 'Rich Components',
    description: '60+ ready-to-use components from buttons and inputs to modals, tables, and animations.',
  },
  {
    icon: 'moon-line',
    title: 'Dark Mode',
    description: 'Multiple built-in themes with easy customization. Switch themes with a single function call.',
  },
]

export default function FeaturesSection() {
  return (
    <View minH="70vh" center fullW borderB bg="overlayBG">
      <View maxW={1100} center gap="xxxl" paddingV="xl" marginH="auto" fullW>
        <Text h2 center>
          Features
        </Text>
        <Row gap="lg">
          {FEATURES.map((feature) => (
            <Col key={feature.title} span={{ mdd: 24, md: 12, df: 8 }}>
              <Card padding="lg" fullH bg="overlayBG" border>
                <View gap="sm">
                  <Icon name={feature.icon} primary size="lg" />
                  <Text h4>{feature.title}</Text>
                  <Text text3>{feature.description}</Text>
                </View>
              </Card>
            </Col>
          ))}
        </Row>
      </View>
    </View>
  )
}
