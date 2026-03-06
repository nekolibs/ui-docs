import { Col, Row, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Row, Col } from '@neko-os/ui'

<Row gapV="sm">
  <Col width="50%">...</Col>
  <Col width="25%">...</Col>
  <Col width="25%">...</Col>
  <Col width="25%">...</Col>
  <Col width="25%">...</Col>
  <Col width="25%">...</Col>
</Row>
`

const CONTENT = (
  <View flex centerV>
    <Row gapV="sm">
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
  return <SampleCodeBlock title="Vertical Gap" code={CODE} content={CONTENT} />
}
