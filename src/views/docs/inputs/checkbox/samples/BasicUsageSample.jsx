import { Checkbox, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Checkbox } from '@neko-os/ui'

<Checkbox value={value} onChange={onChange} />
<Checkbox green />
<Checkbox label="With Label" />
`

const CONTENT = (
  <View row gap={20} flex center>
    <Checkbox initialValue />
    <Checkbox green />
    <Checkbox label="With Label" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
