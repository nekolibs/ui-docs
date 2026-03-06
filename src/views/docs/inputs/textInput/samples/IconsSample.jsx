import { TextInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { TextInput } from '@neko-os/ui'

<TextInput prefixIcon="shield-user-fill" />
<TextInput suffixIcon="shield-user-fill" />
<TextInput prefixIcon="shield-user-fill" suffixIcon="arrow-down-s-fill" />
`

const CONTENT = (
  <View gap={10}>
    <TextInput prefixIcon="shield-user-fill" placeholder="With prefix icon" />
    <TextInput suffixIcon="shield-user-fill" placeholder="With suffix icon" />
    <TextInput prefixIcon="shield-user-fill" suffixIcon="arrow-down-s-fill" placeholder="Both" />
    <TextInput sm prefixIcon="user-line" placeholder="Small icon" />
    <TextInput md prefixIcon="user-line" placeholder="Medium icon" />
    <TextInput lg prefixIcon="user-line" placeholder="Large icon" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Icons" code={CODE} content={CONTENT} />
}
