import { Switch, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<Switch label="Default" />
<Switch label="Custom Gap" gap={20} />
<Switch label="Inverted" invert />
`

const CONTENT = (
  <View gap={20} flex center>
    <Switch label="Default" />
    <Switch label="Custom Gap" gap={20} />
    <Switch label="Inverted" invert />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Space" code={CODE} content={CONTENT} />
}
