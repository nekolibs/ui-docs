import { Col, DateInput, Grid, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DateInput } from '@neko-os/ui'

<DateInput type="day" placeholder="Day" />
<DateInput type="week" placeholder="Week" />
<DateInput type="month" placeholder="Month" />
<DateInput type="quarter" placeholder="Quarter" />
<DateInput type="year" placeholder="Year" />
`

const CONTENT = (
  <View flex>
    <Grid gap={15} colSpan={8}>
      <Col>
        <DateInput type="day" placeholder="Day" />
      </Col>
      <Col>
        <DateInput type="week" placeholder="Week" />
      </Col>
      <Col>
        <DateInput type="month" placeholder="Month" />
      </Col>
      <Col>
        <DateInput type="quarter" placeholder="Quarter" />
      </Col>
      <Col>
        <DateInput type="year" placeholder="Year" />
      </Col>
    </Grid>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Types" code={CODE} content={CONTENT} />
}
