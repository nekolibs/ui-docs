import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Text } from '@neko-os/ui'

<Text>Sample Text</Text>
<Text label="Simple text"  />
<Text label="Simple text" marginB="sm" />
<Text label="Simple text" marginH={15} />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Text label="Simple text" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
