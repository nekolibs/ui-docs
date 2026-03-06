import { Icon, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<Icon name="bank-line" />
<Icon name="home-smile-line" size="xxl" green />
<Icon name="hospital-line" size={35} primary />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Icon name="bank-line" />
    <Icon name="home-smile-line" size="xxl" green />
    <Icon name="hospital-line" size={35} primary />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
