import { Accordion, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Accordion } from '@neko-os/ui'

<Accordion title="transparent BG" bg="transparent">...</Accordion>
<Accordion title="blue BG" bg="blue">...</Accordion>
<Accordion title="text_op10 BG" bg="text_op10">...</Accordion>
<Accordion title="With shadow" shadow>...</Accordion>
`

const CONTENT = (
  <View gap={10} flex>
    <Accordion title="transparent BG" bg="transparent">
      <Text label="Custom content" />
    </Accordion>

    <Accordion title="blue BG" bg="blue">
      <Text label="Custom content" />
    </Accordion>

    <Accordion title="text_op10 BG" bg="text_op10">
      <Text label="Custom content" />
    </Accordion>

    <Accordion title="With shadow" shadow>
      <Text label="Custom content" />
    </Accordion>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Background" code={CODE} content={CONTENT} bg="transparent" padding={0} />
}
