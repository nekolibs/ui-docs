import { Divider, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Divider } from '@neko-os/ui'

<Divider vertical />
<Divider vertical line />
`

const CONTENT = (
  <View row center gap="md" fullH>
    <Text>Left</Text>
    <Divider vertical />
    <Text>Center</Text>
    <Divider vertical line />
    <Text>Right</Text>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Vertical" code={CODE} content={CONTENT} bg="transparent" border />
}
