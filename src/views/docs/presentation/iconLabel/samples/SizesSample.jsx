import { IconLabel, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<IconLabel icon="home-smile-line" label="Home" xxs />
<IconLabel icon="home-smile-line" label="Home" xs />
<IconLabel icon="home-smile-line" label="Home" sm />
<IconLabel icon="home-smile-line" label="Home" md />
<IconLabel icon="home-smile-line" label="Home" lg />
<IconLabel icon="home-smile-line" label="Home" xl />
<IconLabel icon="home-smile-line" label="Home" xxl />
<IconLabel icon="home-smile-line" label="Home" xxxl />
`

const CONTENT = (
  <View gap={10} flex center>
    <IconLabel icon="home-smile-line" label="Home" xxs />
    <IconLabel icon="home-smile-line" label="Home" xs />
    <IconLabel icon="home-smile-line" label="Home" sm />
    <IconLabel icon="home-smile-line" label="Home" md />
    <IconLabel icon="home-smile-line" label="Home" lg />
    <IconLabel icon="home-smile-line" label="Home" xl />
    <IconLabel icon="home-smile-line" label="Home" xxl />
    <IconLabel icon="home-smile-line" label="Home" xxxl />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
