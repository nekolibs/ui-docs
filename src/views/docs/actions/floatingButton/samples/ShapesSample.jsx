import { FloatingButton, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FloatingButton } from '@neko-os/ui'

<FloatingButton icon="add-line" square />
<FloatingButton icon="add-line" square br={0} />
<FloatingButton icon="add-line" square br="sm" />
<FloatingButton icon="add-line" square br={10} />
`

const CONTENT = (
  <View row gap={15} flex relative minHeight={400}>
    <View absolute bottom={0} right={0} row gap="md">
      <FloatingButton icon="add-line" square br={0} relative />
      <FloatingButton icon="add-line" square br="sm" relative />
      <FloatingButton icon="add-line" square br={10} relative />
      <FloatingButton icon="add-line" square relative />
      <FloatingButton icon="add-line" relative />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Shapes" code={CODE} content={CONTENT} />
}
