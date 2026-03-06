import { Accordion, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Accordion } from '@neko-os/ui'

<Accordion title="SM Accordion" sm>...</Accordion>
<Accordion title="MD Accordion">...</Accordion>
<Accordion title="LG Accordion" lg>...</Accordion>
`

const CONTENT = (
  <View gap={10} flex>
    <Accordion title="SM Accordion" sm>
      <Text label="Custom content" />
    </Accordion>

    <Accordion title="MD Accordion" md>
      <Text label="Custom content" />
    </Accordion>

    <Accordion title="LG Accordion" lg>
      <Text label="Custom content" />
    </Accordion>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} bg="transparent" padding={0} />
}
