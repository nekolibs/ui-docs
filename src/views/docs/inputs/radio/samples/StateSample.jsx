import { Radio, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Radio } from '@neko-os/ui'

<Radio label="Loading" loading />
<Radio label="Disabled" disabled />
`

const CONTENT = (
  <View row gap="lg" flex center>
    <Radio label="Loading" loading />
    <Radio label="Disabled" disabled />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
