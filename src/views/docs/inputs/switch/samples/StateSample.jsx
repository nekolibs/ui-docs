import { Switch, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Switch } from '@neko-os/ui'

<Switch label="Loading" loading />
<Switch label="Disabled" disabled />
`

const CONTENT = (
  <View row gap="lg" flex center>
    <Switch label="Loading" loading />
    <Switch label="Disabled" disabled />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
