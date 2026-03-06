import { Checkbox, TextInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { TextInput } from '@neko-os/ui'

<TextInput bg="overlayBG" />
<TextInput bg="green_op20" />
<TextInput borderColor="green-20" />
<TextInput borderColor="red-20" />
`

const CONTENT = (
  <View gap={10}>
    <TextInput bg="overlayBG" placeholder="BG color overlayBG" />
    <TextInput bg="green_op20" placeholder="BG color green_op20" />
    <TextInput borderColor="green-20" placeholder="Border color green-20" />
    <TextInput borderColor="red-20" placeholder="Border color red-20" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
