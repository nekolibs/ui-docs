import { IconLabel, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<IconLabel icon="home-smile-line" label="Home" green />
<IconLabel icon="home-smile-line" label="Home" blue />
<IconLabel icon="home-smile-line" label="Home" red />
<IconLabel icon="home-smile-line" label="Home" color="red-20" />
<IconLabel icon="home-smile-line" label="Home" color="red+20" />
<IconLabel icon="home-smile-line" label="Home" color="#e3e3e3" />
<IconLabel icon="home-smile-line" label="Home" color="#00000075" />
`

const CONTENT = (
  <View gap={10} flex center>
    <IconLabel icon="home-smile-line" label="Home" green />
    <IconLabel icon="home-smile-line" label="Home" blue />
    <IconLabel icon="home-smile-line" label="Home" red />
    <IconLabel icon="home-smile-line" label="Home" color="red-20" />
    <IconLabel icon="home-smile-line" label="Home" color="red+20" />
    <IconLabel icon="home-smile-line" label="Home" color="#e3e3e3" />
    <IconLabel icon="home-smile-line" label="Home" color="#00000075" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
