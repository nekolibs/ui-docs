import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

<View padding="lg" bg="overlayBG" br="md">
  <Text>Hello World</Text>
</View>
`

const CONTENT = (
  <View padding="lg" bg="overlayBG" br="md" border>
    <Text>Hello World</Text>
  </View>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} br={0} />
}
