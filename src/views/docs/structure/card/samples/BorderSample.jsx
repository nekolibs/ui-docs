import { Card, Col, Grid, Text } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Card } from '@neko-os/ui'

<Card padding="lg" border></Card>
<Card padding="lg" border={2} borderColor="red-30"></Card>
`

const CONTENT = (
  <Grid gap="lg" colSpan={{ sm: 24, df: 12 }}>
    <Col>
      <Card padding="lg" border flex>
        <Text h4 marginB={10}>
          Default Border
        </Text>
        <Text>Card content</Text>
        <Text>Card content</Text>
      </Card>
    </Col>

    <Col>
      <Card padding="lg" border={2} borderColor="red-30" flex>
        <Text h4 marginB={10}>
          Custom Border
        </Text>
        <Text>Card content</Text>
        <Text>Card content</Text>
      </Card>
    </Col>
  </Grid>
)

export default function Sample() {
  return <SampleCodeBlock title="Border" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} />
}
