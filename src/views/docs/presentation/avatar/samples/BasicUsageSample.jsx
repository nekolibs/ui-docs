import { Avatar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Avatar } from '@neko-os/ui'

<Avatar name="Chris Storch" orange />
<Avatar src="https://randomuser.me/api/portraits/men/4.jpg" />
<Avatar name="Chris Storch" purple square />
<Avatar src="https://randomuser.me/api/portraits/men/4.jpg" square />
<Avatar initials="C" green />
<Avatar initials="MS" outline />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Avatar name="Chris Storch" orange />
    <Avatar src="https://randomuser.me/api/portraits/men/4.jpg" />
    <Avatar name="Chris Storch" purple square />
    <Avatar src="https://randomuser.me/api/portraits/men/4.jpg" square />
    <Avatar initials="C" green />
    <Avatar initials="MS" outline />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
