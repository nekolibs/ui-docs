import { Card, LabelValue, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { LabelValue } from '@neko-os/ui'

<LabelValue label="Label" value="Text Value" vertical />
`

const CONTENT = (
  <View gap={10} flex center>
    <Card width={350} maxWidth={'100%'} gap="lg">
      <LabelValue label="Label" value="Text Value" vertical />
      <LabelValue label="Label" value="Text Value" vertical />
      <LabelValue label="Label" value="Text Value" vertical />
    </Card>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Vertical" code={CODE} content={CONTENT} bg="transparent" border />
}
