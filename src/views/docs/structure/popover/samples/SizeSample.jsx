import { Button, Link, Popover, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button, Link, Popover, Text } from '@neko-os/ui'

// Same control as a View (width, height, minWidth, maxWidth, etc.)
<Popover content={<Text>Popover content</Text>} width={300} center>
  <Link label="Fixed width" />
</Popover>

<Popover content={<Text>Popover content</Text>} height={100} center>
  <Link label="Fixed height" />
</Popover>

<Popover content={<Text>Popover content</Text>} parentWidth center>
  <Button label="Same width as parent" width={200} />
</Popover>
`

const CONTENT = (
  <View center fullH row gap="lg">
    <Popover content={<Text>Popover content</Text>} width={300} center>
      <Link label="Fixed width" />
    </Popover>

    <Popover content={<Text>Popover content</Text>} height={100} center>
      <Link label="Fixed height" />
    </Popover>

    <Popover content={<Text>Popover content</Text>} parentWidth center>
      <Button label="Same width as parent" width={200} />
    </Popover>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Size" code={CODE} content={CONTENT} />
}
