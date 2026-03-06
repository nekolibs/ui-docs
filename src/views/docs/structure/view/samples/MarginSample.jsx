import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { View } from '@neko-os/ui'

<View margin="md">...</View>
<View marginH="lg">...</View>
<View marginT="xl" marginB="sm">...</View>
`

const CONTENT = (
  <View gap="sm" br="sm" border>
    <View margin="md" padding="sm" bg="overlayBG" br="sm" border>
      <Text sm>margin="md"</Text>
    </View>
    <View marginH="lg" padding="sm" bg="overlayBG" br="sm" border>
      <Text sm>marginH="lg"</Text>
    </View>
    <View marginT="xl" marginB="sm" padding="sm" bg="overlayBG" br="sm" border>
      <Text sm>marginT="xl" marginB="sm"</Text>
    </View>
  </View>
)

export default function MarginSample() {
  return <SampleCodeBlock title="Margin" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} br={0} />
}
