import { TextInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { TextInput } from '@neko-os/ui'

<TextInput placeholder="Loading" loading />
<TextInput placeholder="Disabled" disabled />
<TextInput placeholder="Error" error />
`

const CONTENT = (
  <View gap={15}>
    <TextInput placeholder="Loading" loading />
    <TextInput placeholder="Disabled" disabled />
    <TextInput placeholder="Error" error />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
