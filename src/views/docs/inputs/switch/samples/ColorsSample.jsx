import { Switch, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Switch } from '@neko-os/ui'

<Switch green />
<Switch blue />
<Switch red />
<Switch color="red-20" />
<Switch color="red+20" />
<Switch color="#e3e3e3" />
<Switch color="#00000075" />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Switch green initialValue />
    <Switch blue />
    <Switch red initialValue />
    <Switch color="red-20" />
    <Switch color="red+20" initialValue />
    <Switch color="#e3e3e3" />
    <Switch color="#00000075" initialValue />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
