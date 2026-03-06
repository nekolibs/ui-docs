import { IconLabel, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<IconLabel icon="home-smile-line" label="Home" strong />
<IconLabel icon="bank-line" label="Bank account" />
<IconLabel icon="arrow-right-line" label="Learn More" invert />
`

const CONTENT = (
  <View row gap={30} flex center>
    <IconLabel icon="home-smile-line" label="Home" strong />
    <IconLabel icon="bank-line" label="Bank account" />
    <IconLabel icon="arrow-right-line" label="Learn More" invert />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
