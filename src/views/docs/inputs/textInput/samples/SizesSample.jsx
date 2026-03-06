import { TextInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { TextInput } from '@neko-os/ui'

<TextInput sm />
<TextInput md />
<TextInput lg />
`

const CONTENT = (
  <View gap={10}>
    <TextInput sm placeholder="Small" />
    <TextInput md placeholder="Medium" />
    <TextInput lg placeholder="Large" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
