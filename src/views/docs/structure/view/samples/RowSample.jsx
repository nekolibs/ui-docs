import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

// Horizontal layout
<View row gap="sm">
  <View>Item 1</View>
  <View>Item 2</View>
  <View>Item 3</View>
</View>

// Vertical layout (default)
<View gap="sm">
  <View>Item 1</View>
  <View>Item 2</View>
</View>
`

const CONTENT = (
  <View gap="sm">
    <View row gap="sm">
      <View padding="xl" center bg="overlayBG" border flex>
        <Text sm>Horizontal Col #1</Text>
      </View>
      <View padding="xl" center bg="overlayBG" border flex>
        <Text sm>Horizontal Col #2</Text>
      </View>
      <View padding="xl" center bg="overlayBG" border flex>
        <Text sm>Horizontal Col #3</Text>
      </View>
    </View>
    <View gap="sm">
      <View padding="xl" center bg="overlayBG" border>
        <Text sm>Vertical Row #1</Text>
      </View>
      <View padding="xl" center bg="overlayBG" border>
        <Text sm>Vertical Row #2</Text>
      </View>
    </View>
  </View>
)

export default function RowSample() {
  return (
    <SampleCodeBlock title="Row & Gap" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} br={0} />
  )
}
