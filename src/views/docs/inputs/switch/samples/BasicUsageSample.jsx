import { Switch, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Switch } from '@neko-os/ui'

<Switch value={value} onChange={onChange} />
<Switch green />
<Switch label="With Label" />
`

const CONTENT = (
  <View row gap={20} flex center>
    <Switch initialValue />
    <Switch green />
    <Switch label="With Label" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
