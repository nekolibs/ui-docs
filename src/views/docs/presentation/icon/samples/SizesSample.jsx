import { Icon, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<Icon name="home-smile-line" xxxs />
<Icon name="home-smile-line" xxs />
<Icon name="home-smile-line" xs />
<Icon name="home-smile-line" sm />
<Icon name="home-smile-line" md />
<Icon name="home-smile-line" lg />
<Icon name="home-smile-line" xl />
<Icon name="home-smile-line" xxl />
<Icon name="home-smile-line" xxxl />
<Icon name="home-smile-line" size={42} />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Icon name="home-smile-line" xxxs />
    <Icon name="home-smile-line" xxs />
    <Icon name="home-smile-line" xs />
    <Icon name="home-smile-line" sm />
    <Icon name="home-smile-line" md />
    <Icon name="home-smile-line" lg />
    <Icon name="home-smile-line" xl />
    <Icon name="home-smile-line" xxl />
    <Icon name="home-smile-line" xxxl />
    <Icon name="home-smile-line" size={42} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
