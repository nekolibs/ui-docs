import { Radio, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<Radio label="Default" />
<Radio label="Custom Gap" gap={20} />
<Radio label="Inverted" invert />
`

const CONTENT = (
  <View gap={20} flex center>
    <Radio label="Default" />
    <Radio label="Custom Gap" gap={20} />
    <Radio label="Inverted" invert />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Space" code={CODE} content={CONTENT} />
}
