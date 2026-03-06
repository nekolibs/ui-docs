import { Card, Text } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Card } from '@neko-os/ui'

<Card padding="lg" shadow>
  ...
</Card>
`

const CONTENT = (
  <Card padding="lg" shadow>
    <Text h4 marginB={10}>
      Card with shadow
    </Text>
    <Text>Card content</Text>
    <Text>Card content</Text>
    <Text>Card content</Text>
    <Text>Card content</Text>
  </Card>
)

export default function Sample() {
  return <SampleCodeBlock title="Shadow" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} />
}
