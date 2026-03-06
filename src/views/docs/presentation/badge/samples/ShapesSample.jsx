import { Badge, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Badge } from '@neko-os/ui'

<Badge label="No Radius" br={0} />
<Badge label="Small Radius" br="xxs" />
<Badge label="Round" />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Badge label="No Radius" br={0} />
    <Badge label="Small Radius" br="xxs" />
    <Badge label="Round" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Shapes" code={CODE} content={CONTENT} />
}
