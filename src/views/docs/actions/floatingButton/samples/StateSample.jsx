import { FloatingButton, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FloatingButton } from '@neko-os/ui'

<FloatingButton icon="add-line" onPress={() => alert(1)} />
<FloatingButton icon="add-line" loading onPress={() => alert(2)} />
<FloatingButton icon="add-line" disabled onPress={() => alert(3)} />
<FloatingButton icon="add-line" loading disabled onPress={() => alert(4)} />
`

const CONTENT = (
  <View row gap={15} flex relative minHeight={400}>
    <View absolute bottom={0} right={0} row gap="md">
      <FloatingButton icon="add-line" onPress={() => alert(1)} relative />
      <FloatingButton icon="add-line" loading onPress={() => alert(2)} relative />
      <FloatingButton icon="add-line" disabled onPress={() => alert(3)} relative />
      <FloatingButton icon="add-line" loading disabled onPress={() => alert(4)} relative />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
