import { Divider, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Divider } from '@neko-os/ui'

<Divider line />
<Divider line={4} maxWidth={40} />
<Divider maxWidth={40} center />
`

const CONTENT = (
  <View>
    <Text>Content test 1</Text>
    <Divider line />
    <Text>Content test 2</Text>
    <Divider line={3} maxWidth={40} />
    <Text>Content test 3</Text>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Line" code={CODE} content={CONTENT} bg="transparent" border />
}
