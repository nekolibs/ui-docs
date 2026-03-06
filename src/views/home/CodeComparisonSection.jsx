import { Col, Row, Text, View } from '@neko-os/ui'

import CodeBlock from '../../components/code/CodeBlock'

const TRADITIONAL_CODE = `// Traditional approach
<div style={{
  display: 'flex',
  flexDirection: 'row',
  padding: 16,
  gap: 12,
  backgroundColor: '#6C5CE7',
  borderRadius: 8,
  alignItems: 'center',
}}>
  <span style={{
    color: 'white',
    fontWeight: 'bold',
  }}>
    Hello World
  </span>
</div>`

const NEKO_CODE = `// NekoUI modifier approach
<View row padding="md" gap="sm" bg="primary" br="md" centerV>
  <Text bold color="text2">
    Hello World
  </Text>
</View>`

export default function CodeComparisonSection() {
  return (
    <View minH="70vh" center fullW borderB bg="overlayBG">
      <View maxW={1100} gap="xxxl" paddingV="xl" marginH="auto" fullW>
        <View center gap="sm">
          <Text h2 center>
            Write Less, Do More
          </Text>
          <Text text2 center text3>
            Replace verbose style objects with expressive modifier props.
          </Text>
        </View>
        <Row gap="lg">
          <Col span={{ mdd: 24, df: 12 }}>
            <View gap="xs" flex>
              <Text h4 text3>
                Traditional
              </Text>
              <View flex>
                <CodeBlock code={TRADITIONAL_CODE} />
              </View>
            </View>
          </Col>
          <Col span={{ mdd: 24, df: 12 }}>
            <View gap="xs" flex>
              <Text h4 primary>
                NekoUI
              </Text>
              <View flex>
                <CodeBlock code={NEKO_CODE} />
              </View>
            </View>
          </Col>
        </Row>
      </View>
    </View>
  )
}
