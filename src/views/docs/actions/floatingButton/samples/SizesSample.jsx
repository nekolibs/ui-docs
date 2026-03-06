import { FloatingButton, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FloatingButton } from '@neko-os/ui'

<FloatingButton icon="add-line" sm />
<FloatingButton icon="add-line" md />
<FloatingButton icon="add-line" lg />
<FloatingButton icon="add-line" xl />
`

const CONTENT = (
  <View row gap={15} flex relative minHeight={400}>
    <View absolute bottom={0} right={0} row gap="md" justify="flex-end" align="flex-end">
      <FloatingButton icon="add-line" sm relative />
      <FloatingButton icon="add-line" md relative />
      <FloatingButton icon="add-line" lg relative />
      <FloatingButton icon="add-line" xxxl relative />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
