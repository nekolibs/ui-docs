import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

<View row wrap gap="sm">
  <View>Tag 1</View>
  <View>Tag 2</View>
  <View>Tag 3</View>
  ...
</View>
`

const CONTENT = (
  <View row wrap gap="sm">
    {['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'].map((item) => (
      <View key={item} padding="sm" paddingH="md" bg="overlayBG" br="md" border>
        <Text sm>{item}</Text>
      </View>
    ))}
  </View>
)

export default function WrapSample() {
  return <SampleCodeBlock title="Wrap" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} br={0} />
}
