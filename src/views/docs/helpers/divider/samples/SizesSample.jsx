import { Divider, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<Divider height="lg" line />
<Divider height="xxs" line />
<Divider height={50} line />
`

const CONTENT = (
  <View>
    <Text>Content test 1</Text>
    <Divider height="lg" line />
    <Text>Content test 2</Text>
    <Divider height="xxs" line />
    <Text>Content test 3</Text>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} bg="transparent" border />
}
