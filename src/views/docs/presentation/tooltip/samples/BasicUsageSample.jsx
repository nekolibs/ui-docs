import { Link, Tooltip, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Tooltip, Text } from '@neko-os/ui'

<Tooltip content={<Text>Tooltip content</Text>}>
  <Text>Hover here</Text>
</Tooltip>
`

const CONTENT = (
  <View center fullH row gap="lg">
    <Tooltip label="Tooltip content">
      <Link label="Hover here" />
    </Tooltip>

    <Tooltip trigger="click" label="Tooltip content">
      <Link label="Click here" />
    </Tooltip>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
