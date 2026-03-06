import { Col, Row, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Row } from '@neko-os/ui'

<Row gap="xxxs">...</Row>
<Row gap="xxs">...</Row>
<Row gap="xs">...</Row>
<Row gap="sm">...</Row>
<Row gap="md">...</Row>
<Row gap="lg">...</Row>
<Row gap="xl">...</Row>
<Row gap="xxl">...</Row>
<Row gap="xxxl">...</Row>
<Row gap={15}>...</Row>
`

const CONTENT = (
  <View flex centerV>
    <Row gap="sm">
      <Col width="50%">
        <View bg="green" flex padding="lg" center>
          <Text>50%</Text>
        </View>
      </Col>

      <Col width="25%">
        <View bg="blue" flex padding="lg" center>
          <Text>25%</Text>
        </View>
      </Col>

      <Col width="25%">
        <View bg="blue" flex padding="lg" center>
          <Text>25%</Text>
        </View>
      </Col>

      <Col width="25%">
        <View bg="blue" flex padding="lg" center>
          <Text>25%</Text>
        </View>
      </Col>

      <Col width="25%">
        <View bg="blue" flex padding="lg" center>
          <Text>25%</Text>
        </View>
      </Col>

      <Col width="25%">
        <View bg="blue" flex padding="lg" center>
          <Text>25%</Text>
        </View>
      </Col>

      <Col width="25%">
        <View bg="blue" flex padding="lg" center>
          <Text>25%</Text>
        </View>
      </Col>
    </Row>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Gap" code={CODE} content={CONTENT} />
}
