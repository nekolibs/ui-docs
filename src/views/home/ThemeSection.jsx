import { Col, Row, Text, View } from '@neko-os/ui'

import CodeBlock from '../../components/code/CodeBlock'

const THEME_CODE = `const myTheme = {
  label: 'Ocean',
  base: 'light',

  colors: {
    primary: '#0077B6',
    text: '#023E8A',
    text2: '#0096C7',
    text3: '#48CAE4',
    mainBG: '#CAF0F8',
    overlayBG: '#FFFFFF',
    green: '#06D6A0',
    red: '#EF476F',
  },
}`

const USAGE_CODE = `// Register your themes
const themes = {
  ocean: myTheme,
}

<NekoUI themes={themes} initTheme="ocean">
  <App />
</NekoUI>

// Switch themes at runtime
const { setTheme } = useThemeHandler()
setTheme('ocean')`

export default function ThemeSection() {
  return (
    <View minH="70vh" center fullW borderB bg="overlayBG">
      <View maxW={1100} gap="xxxl" paddingV="xl" marginH="auto" fullW>
        <View center gap="sm">
          <Text h2 center>
            Simple Theme Structure
          </Text>
          <Text text2 center text3 maxW={500}>
            A single object defines your entire theme. Set a base, override the colors you need, and you're done.
          </Text>
        </View>
        <Row gap="lg">
          <Col span={{ mdd: 24, df: 12 }}>
            <View gap="xs" flex>
              <Text h4 text3>
                Define a theme
              </Text>
              <View flex>
                <CodeBlock code={THEME_CODE} />
              </View>
            </View>
          </Col>
          <Col span={{ mdd: 24, df: 12 }}>
            <View gap="xs" flex>
              <Text h4 text3>
                Use it
              </Text>
              <View flex>
                <CodeBlock code={USAGE_CODE} />
              </View>
            </View>
          </Col>
        </Row>
      </View>
    </View>
  )
}
