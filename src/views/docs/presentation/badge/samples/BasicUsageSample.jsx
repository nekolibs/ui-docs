import { Badge, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Badge } from '@neko-os/ui'

<Badge value={12} />
<Badge label="New" green />
<Badge value={999} red />
<Badge value={23} outline text />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Badge value={12} />
    <Badge label="New" green />
    <Badge value={999} red />
    <Badge value={23} outline text />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
