import { Avatar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Avatar } from '@neko-os/ui'

<Avatar icon="checkbox-circle-line" square />
<Avatar icon="checkbox-circle-line" green square />
<Avatar icon="checkbox-circle-line" outline green />
<Avatar icon="time-line" red />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Avatar icon="home-smile-line" square />
    <Avatar icon="check-fill" green square />
    <Avatar icon="survey-line" outline green />
    <Avatar icon="time-line" red />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="With icons" code={CODE} content={CONTENT} />
}
