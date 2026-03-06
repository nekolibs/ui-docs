import { Link, Popover, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Popover, Text } from '@neko-os/ui'

<Popover trigger="click" content={<Text>Popover content</Text>} useBottomDrawer>
  <Text>Click</Text>
</Popover>

<Popover trigger="click" content={<Text>Popover content</Text>} useBottomDrawer={{ sm: true }}>
  <Text>Click</Text>
</Popover>
`

const CONTENT = (
  <View center fullH row gap="lg">
    <Popover trigger="click" content={<Text>Popover content</Text>} useBottomDrawer>
      <Link label="useBottomDrawer" />
    </Popover>

    <Popover trigger="click" content={<Text>Popover content</Text>} useBottomDrawer={{ sm: true }}>
      <Link label="useBottomDrawer on sm" />
    </Popover>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="useBottomDrawer" code={CODE} content={CONTENT} />
}
