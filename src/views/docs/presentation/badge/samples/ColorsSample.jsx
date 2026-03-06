import { Badge, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Badge } from '@neko-os/ui'

<Badge value={999} />
<Badge value={999} green />
<Badge value={999} red />
<Badge value={999} text />
<Badge value={999} color="red_op20" />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Badge value={999} />
    <Badge value={999} green />
    <Badge value={999} red />
    <Badge value={999} text />
    <Badge value={999} color="red_op20" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
