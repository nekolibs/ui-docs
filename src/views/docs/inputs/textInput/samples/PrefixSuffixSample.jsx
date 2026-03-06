import { Icon, Text, TextInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { TextInput } from '@neko-os/ui'

<TextInput prefix="username:" />
<TextInput suffix="@gmail.com" />
<TextInput prefix={<Icon name="shield-user-fill" red />} />
<TextInput suffix={<Icon name="shield-user-fill" blue />} />
<TextInput prefix={<Text red>Age:</Text>} />
<TextInput suffix={<Text text3>Kg</Text>} />
`

const CONTENT = (
  <View gap={10}>
    <TextInput prefix="username:" />
    <TextInput suffix="@gmail.com" />
    <TextInput prefix={<Icon name="shield-user-fill" red />} />
    <TextInput suffix={<Icon name="shield-user-fill" blue />} />
    <TextInput prefix={<Text red>Age:</Text>} />
    <TextInput suffix={<Text text3>Kg</Text>} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Prefix and Suffix" code={CODE} content={CONTENT} />
}
