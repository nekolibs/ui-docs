import { Editable, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Editable, Text } from '@neko-os/ui'

<Editable disabled value="Disabled">
  <Text>Disabled</Text>
</Editable>

<Editable loading value="Loading">
  <Text>Loading</Text>
</Editable>
`

const CONTENT = (
  <View gap="lg">
    <View gap="xs">
      <Editable disabled value="Cannot edit this">
        <Text>Cannot edit this</Text>
      </Editable>
    </View>

    <View gap="xs">
      <Editable loading value="Loading">
        <Text>Loading</Text>
      </Editable>
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
