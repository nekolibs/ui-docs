import { MaskInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { MaskInput } from '@neko-os/ui'

<MaskInput placeholder="Loading" loading />
<MaskInput placeholder="Disabled" disabled />
<MaskInput placeholder="Error" error />
`

const CONTENT = (
  <View gap={15}>
    <MaskInput placeholder="Loading" loading />
    <MaskInput placeholder="Disabled" disabled />
    <MaskInput placeholder="Error" error />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
