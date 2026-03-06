import { Badge, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Badge } from '@neko-os/ui'

<Badge dot red />
<Badge label="sm" sm red />
<Badge label="md" md red />
<Badge label="lg" lg red />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Badge dot red />
    <Badge label="sm" sm red />
    <Badge label="md" md red />
    <Badge label="lg" lg red />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
