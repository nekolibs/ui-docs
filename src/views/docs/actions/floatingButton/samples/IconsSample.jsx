import { FloatingButton, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FloatingButton } from '@neko-os/ui'

<FloatingButton icon="thumb-up-fill" />
<FloatingButton icon="thumb-up-fill" outline />
<FloatingButton icon="checkbox-circle-line" green />
<FloatingButton icon="checkbox-circle-line" />
<FloatingButton icon="checkbox-circle-line" square />
`

const CONTENT = (
  <View row gap={15} flex relative minHeight={400}>
    <View absolute bottom={0} right={0} row gap="md">
      <FloatingButton icon="thumb-up-fill" relative />
      <FloatingButton icon="thumb-up-fill" outline relative />
      <FloatingButton icon="checkbox-circle-line" green relative />
      <FloatingButton icon="checkbox-circle-line" relative />
      <FloatingButton icon="checkbox-circle-line" square relative />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="icons" code={CODE} content={CONTENT} />
}
