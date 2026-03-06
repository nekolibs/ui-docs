import { Checkbox, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<Checkbox label="Default" />
<Checkbox label="Custom Gap" gap={20} />
<Checkbox label="Inverted" invert />
`

const CONTENT = (
  <View gap={20} flex center>
    <Checkbox label="Default" />
    <Checkbox label="Custom Gap" gap={20} />
    <Checkbox label="Inverted" invert />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Space" code={CODE} content={CONTENT} />
}
