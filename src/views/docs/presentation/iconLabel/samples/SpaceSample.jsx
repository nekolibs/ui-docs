import { IconLabel, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<IconLabel icon="home-smile-line" label="Default" />
<IconLabel icon="home-smile-line" label="Custom Gap" gap={10} />
<IconLabel icon="home-smile-line" label="Inverted" invert />
`

const CONTENT = (
  <View gap={10} flex center>
    <IconLabel icon="home-smile-line" label="Default" />
    <IconLabel icon="home-smile-line" label="Custom Gap" gap={10} />
    <IconLabel icon="home-smile-line" label="Inverted" invert />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Space" code={CODE} content={CONTENT} />
}
