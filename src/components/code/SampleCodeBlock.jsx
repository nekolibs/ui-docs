import { Card, Col, Row, Text, View } from '@neko-os/ui'

import CodeBlock from './CodeBlock'

export default function SampleCodeBlock({ title, code, content, fullW, ...props }) {
  return (
    <View>
      <Text marginB={10} h4 text3>
        {title}
      </Text>
      <Row gap={'lg'}>
        <Col span={{ mdd: 24, df: fullW ? 24 : 12 }}>
          <Card flex padding={20} bg="overlayBG" fullH {...props}>
            {content}
          </Card>
        </Col>

        <Col span={{ mdd: 24, df: fullW ? 24 : 12 }}>
          <View flex fullH>
            <CodeBlock code={code} />
          </View>
        </Col>
      </Row>
    </View>
  )
}
