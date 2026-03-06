import { Button, Link, Tooltip, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button, Link, Tooltip, Text } from '@neko-os/ui'

// Same control as a View (width, height, minWidth, maxWidth, etc.)
<Tooltip label="Tooltip content" width={300} center>
  <Link label="Fixed width" />
</Tooltip>

<Tooltip label="Tooltip content" height={100} center>
  <Link label="Fixed height" />
</Tooltip>

<Tooltip label="Tooltip content" parentWidth center>
  <Button label="Same width as parent" width={200} />
</Tooltip>
`

const CONTENT = (
  <View center fullH row gap="lg">
    <Tooltip label="Tooltip content" width={300} center>
      <Link label="Fixed width" />
    </Tooltip>

    <Tooltip label="Tooltip content" height={100} center>
      <Link label="Fixed height" />
    </Tooltip>

    <Tooltip label="Tooltip content" parentWidth center>
      <Button label="Same width as parent" width={200} />
    </Tooltip>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Size" code={CODE} content={CONTENT} />
}
