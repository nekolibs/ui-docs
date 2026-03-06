import { DateInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DateInput } from '@neko-os/ui'

<DateInput sm />
<DateInput md />
<DateInput lg />
`

const CONTENT = (
  <View gap={10}>
    <DateInput sm placeholder="Small" />
    <DateInput md placeholder="Medium" />
    <DateInput lg placeholder="Large" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
