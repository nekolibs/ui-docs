import { Checkbox, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Checkbox } from '@neko-os/ui'

<Checkbox green />
<Checkbox blue />
<Checkbox red />
<Checkbox color="red-20" />
<Checkbox color="red+20" />
<Checkbox color="#e3e3e3" />
<Checkbox color="#00000075" />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Checkbox green initialValue />
    <Checkbox blue />
    <Checkbox red initialValue />
    <Checkbox color="red-20" />
    <Checkbox color="red+20" initialValue />
    <Checkbox color="#e3e3e3" />
    <Checkbox color="#00000075" initialValue />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
