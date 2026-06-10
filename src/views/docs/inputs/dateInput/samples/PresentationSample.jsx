import { Col, DateInput, Grid, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DateInput } from '@neko-os/ui'

<DateInput presentation="calendar" placeholder="Calendar" />
<DateInput presentation="wheel" placeholder="Wheel" />
`

const CONTENT = (
  <View flex>
    <Grid gap={15} colSpan={8}>
      <Col>
        <DateInput presentation="calendar" placeholder="Calendar" />
      </Col>
      <Col>
        <DateInput presentation="wheel" placeholder="Wheel (native only)" />
      </Col>
    </Grid>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Presentation" code={CODE} content={CONTENT} />
}
