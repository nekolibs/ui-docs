import { Col, Row, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Col, Row } from '@neko-os/ui'

<Row>
  <Col flex={1}>...</Col>
  <Col flex={2}>...</Col>
</Row>
`

const CONTENT = (
  <View flex centerV>
    <Row>
      <Col flex={1}>
        <View bg="blue" flex padding="lg" center>
          <Text>Flex 1</Text>
        </View>
      </Col>

      <Col flex={2}>
        <View bg="green" flex padding="lg" center>
          <Text>Flex 2</Text>
        </View>
      </Col>
    </Row>
  </View>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
