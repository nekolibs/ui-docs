import { Link, Popover, Text, TextInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Link, Popover, Text, TextInput } from '@neko-os/ui'

<Popover content={<Text>Popover content</Text>}>
  <Link label="Hover here" />
</Popover>

<Popover trigger="click" content={<Text>Popover content</Text>}>
  <Link label="Click here" />
</Popover>

<Popover trigger="focus" content={<Text>Popover content</Text>}>
  <TextInput placeholder="Focus here" maxWidth={200} />
</Popover>
`

const CONTENT = (
  <View center fullH row gap="lg">
    <Popover content={<Text>Popover content</Text>}>
      <Link label="Hover here" />
    </Popover>

    <Popover trigger="click" content={<Text>Popover content</Text>}>
      <Link label="Click here" />
    </Popover>

    <Popover trigger="focus" content={<Text>Popover content</Text>}>
      <TextInput placeholder="Focus here" maxWidth={200} />
    </Popover>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Trigger" code={CODE} content={CONTENT} />
}
