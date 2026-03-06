import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Text } from '@neko-os/ui'

<Text label="Default text color" strong text />
<Text label="Secondary text color" strong text2 />
<Text label="Tertiary text color" strong text3 />
<Text label="Custom color from theme" strong red />
<Text label="Custom variation" strong color="blue+20" />
<Text label="Custom variation" strong color="blue-20" />
`

const CONTENT = (
  <View gap={15} flex center>
    <Text label="Default text color" strong text />
    <Text label="Secondary text color" strong text2 />
    <Text label="Tertiary text color" strong text3 />
    <Text label="Custom color from theme" strong red />
    <Text label="Custom variation" strong color="blue+20" />
    <Text label="Custom variation" strong color="blue-20" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
