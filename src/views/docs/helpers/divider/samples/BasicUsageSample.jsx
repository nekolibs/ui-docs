import { Divider, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Divider } from '@neko-os/ui'

<Divider  />
<Divider height="lg" />
<Divider height={15} />
`

const CONTENT = (
  <View>
    <Text>Content test 1</Text>
    <Divider />
    <Text>Content test 2</Text>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} bg="transparent" border />
}
