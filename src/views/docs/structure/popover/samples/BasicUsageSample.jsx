import { Link, Popover, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Popover, Text } from '@neko-os/ui'

<Popover content={<Text>Popover content</Text>}>
  <Text>Hover here</Text>
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
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
