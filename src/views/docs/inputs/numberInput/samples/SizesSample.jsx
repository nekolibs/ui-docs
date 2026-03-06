import { NumberInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberInput } from '@neko-os/ui'

<NumberInput sm />
<NumberInput md />
<NumberInput lg />
`

const CONTENT = (
  <View gap={10}>
    <NumberInput sm placeholder="Small" />
    <NumberInput md placeholder="Medium" />
    <NumberInput lg placeholder="Large" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
