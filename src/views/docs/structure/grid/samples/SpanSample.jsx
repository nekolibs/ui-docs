import { Col, Row, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Col, Row } from '@neko-os/ui'

<Row>
  <Col span={8}>...</Col>
  <Col span={12}>...</Col>
  <Col span={4}>...</Col>
</Row>
`

const CONTENT = (
  <View flex centerV>
    <Row>
      <Col span={8}>
        <View bg="blue" flex padding="lg" center>
          <Text>Span 8</Text>
        </View>
      </Col>

      <Col span={12}>
        <View bg="green" flex padding="lg" center>
          <Text>Span 12</Text>
        </View>
      </Col>

      <Col span={4}>
        <View bg="blue" flex padding="lg" center>
          <Text>Span 6</Text>
        </View>
      </Col>
    </Row>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Span" code={CODE} content={CONTENT} />
}
