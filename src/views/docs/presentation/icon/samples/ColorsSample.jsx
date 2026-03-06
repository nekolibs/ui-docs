import { Icon, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<Icon name="home-smile-line" green />
<Icon name="home-smile-line" blue />
<Icon name="home-smile-line" red />
<Icon name="home-smile-line" color="red-20" />
<Icon name="home-smile-line" color="red+20" />
<Icon name="home-smile-line" color="#e3e3e3" />
<Icon name="home-smile-line" color="#00000075" />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Icon name="home-smile-line" green />
    <Icon name="home-smile-line" blue />
    <Icon name="home-smile-line" red />
    <Icon name="home-smile-line" color="red-20" />
    <Icon name="home-smile-line" color="red+20" />
    <Icon name="home-smile-line" color="#e3e3e3" />
    <Icon name="home-smile-line" color="#00000075" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
