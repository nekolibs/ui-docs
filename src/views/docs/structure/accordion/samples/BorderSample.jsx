import { Accordion, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Accordion } from '@neko-os/ui'

<Accordion title="With border" border>...</Accordion>
<Accordion title="With border width" border={4}>...</Accordion>
<Accordion title="With border color" border borderColor="green">...</Accordion>
`

const CONTENT = (
  <View gap={10} flex>
    <Accordion title="With border" border>
      <Text label="Custom content" />
    </Accordion>

    <Accordion title="With border width" border={4}>
      <Text label="Custom content" />
    </Accordion>

    <Accordion title="With border color" border borderColor="green">
      <Text label="Custom content" />
    </Accordion>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Bordered" code={CODE} content={CONTENT} bg="transparent" padding={0} />
}
