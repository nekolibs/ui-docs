import { Link, Tooltip, TextInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Link, Tooltip, Text, TextInput } from '@neko-os/ui'

<Tooltip label="Tooltip label">
  <Link label="Hover here" />
</Tooltip>

<Tooltip trigger="click" label="Tooltip label">
  <Link label="Click here" />
</Tooltip>

<Tooltip trigger="focus" label="Tooltip label">
  <TextInput placeholder="Focus here" maxWidth={200} />
</Tooltip>
`

const CONTENT = (
  <View center fullH row gap="lg">
    <Tooltip label="Tooltip label">
      <Link label="Hover here" />
    </Tooltip>

    <Tooltip trigger="click" label="Tooltip label">
      <Link label="Click here" />
    </Tooltip>

    <Tooltip trigger="focus" label="Tooltip label">
      <TextInput placeholder="Focus here" maxWidth={200} />
    </Tooltip>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Trigger" code={CODE} content={CONTENT} />
}
