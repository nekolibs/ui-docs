import { Col, Grid, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

<View bg="primary">...</View>
<View bg="blue">...</View>
<View bg="green">...</View>
<View bg="overlayBG">...</View>
<View bg="primary-10">...</View>
`

const CONTENT = (
  <Grid gap="sm" colSpan={{ sm: 24, df: 12 }}>
    <Col>
      <View padding="xl" center bg="primary">
        <Text sm white>primary</Text>
      </View>
    </Col>
    <Col>
      <View padding="xl" center bg="blue">
        <Text sm white>blue</Text>
      </View>
    </Col>
    <Col>
      <View padding="xl" center bg="green">
        <Text sm white>green</Text>
      </View>
    </Col>
    <Col>
      <View padding="xl" center bg="overlayBG">
        <Text sm>overlayBG</Text>
      </View>
    </Col>
    <Col>
      <View padding="xl" center bg="primary-10">
        <Text sm>primary-10</Text>
      </View>
    </Col>
    <Col>
      <View padding="xl" center bg="red-10">
        <Text sm>red-10</Text>
      </View>
    </Col>
  </Grid>
)

export default function BackgroundSample() {
  return <SampleCodeBlock title="Background" code={CODE} content={CONTENT} bg="transparent" padding={0} br={0} />
}
