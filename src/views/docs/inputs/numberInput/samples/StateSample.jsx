import { NumberInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberInput } from '@neko-os/ui'

<NumberInput placeholder="Loading" loading />
<NumberInput placeholder="Disabled" disabled />
<NumberInput placeholder="Error" error />
`

const CONTENT = (
  <View gap={15}>
    <NumberInput placeholder="Loading" loading />
    <NumberInput placeholder="Disabled" disabled />
    <NumberInput placeholder="Error" error />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
