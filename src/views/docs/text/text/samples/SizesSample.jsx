import { Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Text } from '@neko-os/ui'

<Text label="h1 text" h1 />
<Text label="h2 text" h2 />
<Text label="h3 text" h3 />
<Text label="h4 text" h4 />
<Text label="h5 text" h5 />
<Text label="h6 text" h6 />
<Text label="p text" p />
<Text label="sm text" sm />
<Text label="xs text" xs />
<Text label="Custom" size={12} />
`

const CONTENT = (
  <View gap={15} flex center>
    <Text label="h1 text" h1 />
    <Text label="h2 text" h2 />
    <Text label="h3 text" h3 />
    <Text label="h4 text" h4 />
    <Text label="h5 text" h5 />
    <Text label="h6 text" h6 />
    <Text label="p text" p />
    <Text label="sm text" sm />
    <Text label="xs text" xs />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
