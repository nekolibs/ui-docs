import { Accordion, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Accordion } from '@neko-os/ui'

<Accordion title="Accordion title">
  <Text label="Custom content" />
</Accordion>

<Accordion title="Init open" initOpen>
  <Text label="Custom content" />
</Accordion>
`

const CONTENT = (
  <View gap={10} flex>
    <Accordion title="Accordion title">
      <Text label="Custom content" />
    </Accordion>

    <Accordion title="Init open" initOpen>
      <Text label="Custom content" />
    </Accordion>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} bg="transparent" padding={0} />
}
