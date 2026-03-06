import { Checkbox, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Checkbox } from '@neko-os/ui'

<Checkbox label="Loading" loading />
<Checkbox label="Disabled" disabled />
`

const CONTENT = (
  <View row gap="lg" flex center>
    <Checkbox label="Loading" loading />
    <Checkbox label="Disabled" disabled />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
