import { IconLabel, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<IconLabel icon="home-smile-line" label="Home" loading />
<IconLabel icon="arrow-right-line" label="Learn More" loading invert />
<IconLabel icon="arrow-right-line" label="Delete" red loading invert />
`

const CONTENT = (
  <View row gap={30} flex center>
    <IconLabel icon="home-smile-line" label="Home" loading />
    <IconLabel icon="arrow-right-line" label="Learn More" loading invert />
    <IconLabel icon="arrow-right-line" label="Delete" red loading invert />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Loading" code={CODE} content={CONTENT} />
}
