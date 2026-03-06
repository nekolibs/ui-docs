import { Col, Grid, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

<View br="xs">...</View>
<View br="md">...</View>
<View br="xl">...</View>
<View round>...</View>
`

const CONTENT = (
  <Grid gap="sm" colSpan={{ sm: 12, df: 12 }}>
    <Col>
      <View padding="md" bg="overlayBG" border br="xs">
        <Text sm>br="xs"</Text>
      </View>
    </Col>
    <Col>
      <View padding="md" bg="overlayBG" border br="md">
        <Text sm>br="md"</Text>
      </View>
    </Col>
    <Col>
      <View padding="md" bg="overlayBG" border br="xl">
        <Text sm>br="xl"</Text>
      </View>
    </Col>
    <Col>
      <View padding="md" bg="overlayBG" border br="xxxl">
        <Text sm>br="xxxl"</Text>
      </View>
    </Col>
  </Grid>
)

export default function BorderRadiusSample() {
  return <SampleCodeBlock title="Border Radius" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} br={0} />
}
