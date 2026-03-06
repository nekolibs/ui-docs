import { Col, Row, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Col, Row } from '@neko-os/ui'

<Row>
  <Col width={125}>...</Col>
  <Col flex={1}>...</Col>
  <Col width="20%">...</Col>
</Row>
`

const CONTENT = (
  <View flex centerV>
    <Row>
      <Col width={125}>
        <View bg="blue" flex padding="lg" center>
          <Text>125px</Text>
        </View>
      </Col>

      <Col flex={1}>
        <View bg="green" flex padding="lg" center>
          <Text>Flex 1</Text>
        </View>
      </Col>

      <Col width="25%">
        <View bg="blue" flex padding="lg" center>
          <Text>20%</Text>
        </View>
      </Col>
    </Row>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Width" code={CODE} content={CONTENT} />
}
