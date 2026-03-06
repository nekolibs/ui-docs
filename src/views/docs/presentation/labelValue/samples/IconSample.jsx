import { Card, LabelValue, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { LabelValue } from '@neko-os/ui'

<LabelValue icon="id-card-line" label="Name" value="Lorem Ipsum" spread />
<LabelValue icon="map-pin-user-line" label="Address" value="Lorem Ipsum" spread />
<LabelValue icon="cake-2-line" label="Age" value="36y" spread />
`

const CONTENT = (
  <View gap={10} flex center>
    <Card width={350} maxWidth={'100%'} gap="xl">
      <LabelValue icon="id-card-line" label="Name" value="Lorem Ipsum" spread />
      <LabelValue icon="map-pin-user-line" label="Address" value="Lorem Ipsum" spread />
      <LabelValue icon="cake-2-line" label="Age" value="36y" spread />
    </Card>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="With Icons" code={CODE} content={CONTENT} bg="transparent" border />
}
