import { Card, Text } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Card } from '@neko-os/ui'

<Card padding="lg">
  ...
</Card>
`

const CONTENT = (
  <Card padding="lg">
    <Text h4 marginB={10}>
      Card title
    </Text>
    <Text>Card content</Text>
    <Text>Card content</Text>
    <Text>Card content</Text>
    <Text>Card content</Text>
  </Card>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} />
}
