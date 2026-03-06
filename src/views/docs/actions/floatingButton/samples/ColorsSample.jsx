import { FloatingButton, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FloatingButton } from '@neko-os/ui'

<FloatingButton primary />
<FloatingButton color="primary-10" />
<FloatingButton green />
<FloatingButton blue />
<FloatingButton red />
<FloatingButton color="#e3e3e3" />
<FloatingButton color="#00000075" />
`

const CONTENT = (
  <View row gap={15} flex relative minHeight={400}>
    <View absolute bottom={0} right={0} row gap="md">
      <FloatingButton icon="add-line" primary relative />
      <FloatingButton icon="add-line" color="primary-10" relative />
      <FloatingButton icon="add-line" green relative />
      <FloatingButton icon="add-line" blue relative />
      <FloatingButton icon="add-line" red relative />
      <FloatingButton icon="add-line" color="#e3e3e3" relative />
      <FloatingButton icon="add-line" color="#00000075" relative />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
