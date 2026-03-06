import { Avatar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Avatar } from '@neko-os/ui'

<Avatar initials="CS" blue />
<Avatar initials="CS" green />
<Avatar initials="CS" red />
<Avatar initials="CS" color="purple+20" />
<Avatar initials="CS" color="red_op20" />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Avatar initials="CS" blue />
    <Avatar initials="CS" green />
    <Avatar initials="CS" red />
    <Avatar initials="CS" color="purple+20" />
    <Avatar initials="CS" color="red_op20" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
