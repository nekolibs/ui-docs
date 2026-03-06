import { Badge, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Badge } from '@neko-os/ui'

<Badge icon="checkbox-circle-line" red ratio={1} />
<Badge icon="time-line" red ratio={1} />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Badge icon="checkbox-circle-line" red ratio={1} />
    <Badge icon="time-line" red ratio={1} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="With icons" code={CODE} content={CONTENT} />
}
