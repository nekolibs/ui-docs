import { Badge, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Badge } from '@neko-os/ui'

<Badge value={12} red>
  <Text>Text with badge</Text>
</Badge>

<Badge value={12} red dot>
  <Text>Text with dot</Text>
</Badge>

<Badge value="New" green sm outline>
  <Text>Text with label</Text>
</Badge>
`

const CONTENT = (
  <View gap={25} flex center>
    <Badge value={12} red>
      <Text>Text with badge</Text>
    </Badge>

    <Badge value={12} red dot>
      <Text>Text with dot</Text>
    </Badge>

    <Badge value="New" green sm outline>
      <Text>Text with label</Text>
    </Badge>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Wrapper" code={CODE} content={CONTENT} />
}
