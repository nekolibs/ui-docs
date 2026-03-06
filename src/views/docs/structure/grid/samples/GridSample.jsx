import { Col, Grid, Text, View } from '@neko-os/ui'
import { range } from 'ramda'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Col, Grid } from '@neko-os/ui'

<Grid colSpan={8} gap="sm">
  <Col>...</Col>
  <Col>...</Col>
</Grid>
`

const CONTENT = (
  <View flex centerV>
    <Grid colSpan={8} gap="sm">
      {range(1, 10).map((i) => (
        <Col key={i}>
          <View bg={i % 2 === 0 ? 'blue' : 'green'} flex padding="lg" center>
            <Text>Col {i}</Text>
          </View>
        </Col>
      ))}
    </Grid>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Grid" code={CODE} content={CONTENT} />
}
