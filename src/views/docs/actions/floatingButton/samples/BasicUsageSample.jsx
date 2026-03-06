import { FloatingButton, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FloatingButton } from '@neko-os/ui'

<FloatingButton />
<FloatingButton outline />
<FloatingButton useSafeArea={false} />
`

const CONTENT = (
  <View row gap={15} flex center relative minHeight={400}>
    <FloatingButton icon="add-line" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
