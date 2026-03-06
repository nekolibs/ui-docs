import { Avatar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Avatar } from '@neko-os/ui'

<Avatar initials="CS" />
<Avatar initials="CS" br={0} square />
<Avatar initials="CS" br="lg" square />
<Avatar initials="CS" square />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Avatar initials="CS" />
    <Avatar initials="CS" br={0} square />
    <Avatar initials="CS" br="lg" square />
    <Avatar initials="CS" square />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Shapes" code={CODE} content={CONTENT} />
}
