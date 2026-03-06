import { Card, Col, Grid, Text } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Card } from '@neko-os/ui'

<Card padding="lg" bg="green">
  ...
</Card>
`

const CONTENT = (
  <Grid gap="lg" colSpan={{ sm: 24, df: 12 }}>
    <Col>
      <Card padding="lg" bg="blue" flex>
        <Text h4 marginB={10}>
          Blue Card
        </Text>
        <Text>Card content</Text>
        <Text>Card content</Text>
      </Card>
    </Col>

    <Col>
      <Card padding="lg" bg="green" flex>
        <Text h4 marginB={10}>
          Green Card
        </Text>
        <Text>Card content</Text>
        <Text>Card content</Text>
      </Card>
    </Col>
  </Grid>
)

export default function Sample() {
  return <SampleCodeBlock title="Background" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} />
}
