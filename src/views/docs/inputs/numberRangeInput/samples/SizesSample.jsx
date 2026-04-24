import { NumberRangeInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberRangeInput } from '@neko-os/ui'

<NumberRangeInput sm />
<NumberRangeInput />
<NumberRangeInput lg />
`

const CONTENT = (
  <View gap="md">
    <NumberRangeInput sm width={300} />
    <NumberRangeInput width={300} />
    <NumberRangeInput lg width={300} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
