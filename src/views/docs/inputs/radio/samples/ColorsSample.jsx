import { Radio, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Radio } from '@neko-os/ui'

<Radio green />
<Radio blue />
<Radio red />
<Radio color="red-20" />
<Radio color="red+20" />
<Radio color="#e3e3e3" />
<Radio color="#00000075" />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Radio green initialValue />
    <Radio blue />
    <Radio red initialValue />
    <Radio color="red-20" />
    <Radio color="red+20" initialValue />
    <Radio color="#e3e3e3" />
    <Radio color="#00000075" initialValue />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
