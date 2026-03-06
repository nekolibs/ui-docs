import { Radio, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Radio } from '@neko-os/ui'

<Radio value={value} onChange={onChange} />
<Radio green />
<Radio label="With Label" />
`

const CONTENT = (
  <View row gap={20} flex center>
    <Radio initialValue />
    <Radio green />
    <Radio label="With Label" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
