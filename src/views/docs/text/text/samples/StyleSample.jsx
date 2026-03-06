import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Text } from '@neko-os/ui'

<Text label="Bold" strong />
<Text label="Extra Bold" weight={900} />
<Text label="Underline" underline />
<Text label="Italic" italic />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Text label="Bold" strong />
    <Text label="Extra Bold" weight={900} />
    <Text label="Underline" underline />
    <Text label="Italic" italic />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Style" code={CODE} content={CONTENT} />
}
