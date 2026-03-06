import { Col, Grid, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

<View border>...</View>
<View border={2} borderColor="primary">...</View>
<View borderB>...</View>
`

const CONTENT = (
  <Grid gap="sm" colSpan={{ sm: 24, df: 12 }}>
    <Col>
      <View padding="md" border>
        <Text sm>border</Text>
      </View>
    </Col>
    <Col>
      <View padding="md" border={2} borderColor="primary">
        <Text sm>border={2} borderColor="primary"</Text>
      </View>
    </Col>
    <Col>
      <View padding="md" borderB>
        <Text sm>borderB</Text>
      </View>
    </Col>
    <Col>
      <View padding="md" borderT borderB>
        <Text sm>borderT borderB</Text>
      </View>
    </Col>
  </Grid>
)

export default function BorderSample() {
  return <SampleCodeBlock title="Border" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} br={0} />
}
