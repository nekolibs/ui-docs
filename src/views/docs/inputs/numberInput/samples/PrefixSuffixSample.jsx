import { Icon, Text, NumberInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberInput } from '@neko-os/ui'

<NumberInput prefix="Value:" />
<NumberInput suffix="$" />
<NumberInput prefix={<Text red>Age:</Text>} />
<NumberInput suffix={<Text text3>Kg</Text>} />
`

const CONTENT = (
  <View gap={10}>
    <NumberInput prefix="Value:" />
    <NumberInput suffix="$" />
    <NumberInput prefix={<Text red>Age:</Text>} />
    <NumberInput suffix={<Text text3>Kg</Text>} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Prefix and Suffix" code={CODE} content={CONTENT} />
}
