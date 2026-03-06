import { Col, Divider, Row, Text, View, useResponsive } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Col, Row } from '@neko-os/ui'

<Row gap={{ lgu: 'sm', df: 0 }}>
  <Col span={{ xl: 8, lg: 12, md: 18, sm: 24 }}>...</Col>
  <Col flex={1}>...</Col>
</Row>
`

function Content() {
  const { screen } = useResponsive()

  return (
    <View flex centerV>
      <Text marginB="sm">
        Current screen size:{' '}
        <Text strong primary>
          {screen}
        </Text>
      </Text>

      <Row gap={{ lgu: 'sm', df: 0 }}>
        <Col span={{ xl: 8, lg: 12, md: 18, sm: 24 }}>
          <View bg="blue" flex padding="lg" center>
            <Text>xl: 8, lg: 12, md: 18, sm: 24</Text>
          </View>
        </Col>

        <Col flex={1}>
          <View bg="green" flex padding="lg" center>
            <Text>Flex 1</Text>
          </View>
        </Col>
      </Row>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Responsive" code={CODE} content={<Content />} />
}
