import { Divider, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<Divider vertical />
<Divider vertical line />
`

const CONTENT = (
  <View center>
    <Text red>TODO</Text>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Vertical" code={CODE} content={CONTENT} bg="transparent" border />
}
