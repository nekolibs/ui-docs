import { RateInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { RateInput } from '@neko-os/ui'

<RateInput loading />
<RateInput disabled />
`

const CONTENT = (
  <View gap={15}>
    <RateInput loading />
    <RateInput disabled />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
