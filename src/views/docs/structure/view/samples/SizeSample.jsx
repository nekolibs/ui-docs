import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

<View width={200} height={60}>...</View>
<View minH={80}>...</View>
<View fullW>...</View>
<View minW={150} maxW={300}>...</View>
`

const CONTENT = (
  <View gap="sm">
    <View width={200} height={60} bg="overlayBG" border padding="sm" center>
      <Text sm>
        width={200} height={60}
      </Text>
    </View>
    <View minH={80} bg="overlayBG" border padding="sm" centerV>
      <Text sm>minH={80}</Text>
    </View>
    <View fullW bg="overlayBG" border padding="sm">
      <Text sm>fullW</Text>
    </View>
    <View minW={150} maxW={300} bg="overlayBG" border padding="sm">
      <Text sm>
        minW={150} maxW={300}
      </Text>
    </View>
  </View>
)

export default function SizeSample() {
  return <SampleCodeBlock title="Size" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} br={0} />
}
