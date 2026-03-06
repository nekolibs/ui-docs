import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

<View padding="xs">...</View>
<View padding="md">...</View>
<View padding="xl">...</View>

<View paddingH="lg" paddingV="xs">...</View>
<View paddingT="xl" paddingB="sm">...</View>
`

const CONTENT = (
  <View gap="md">
    <View padding="xs" bg="overlayBG" br="sm" border>
      <Text sm>padding="xs"</Text>
    </View>
    <View padding="md" bg="overlayBG" br="sm" border>
      <Text sm>padding="md"</Text>
    </View>
    <View padding="xl" bg="overlayBG" br="sm" border>
      <Text sm>padding="xl"</Text>
    </View>
    <View paddingH="lg" paddingV="xs" bg="overlayBG" br="sm" border>
      <Text sm>paddingH="lg" paddingV="xs"</Text>
    </View>
    <View paddingT="xl" paddingB="sm" bg="overlayBG" br="sm" border>
      <Text sm>paddingT="xl" paddingB="sm"</Text>
    </View>
  </View>
)

export default function PaddingSample() {
  return <SampleCodeBlock title="Padding" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} br={0} />
}
