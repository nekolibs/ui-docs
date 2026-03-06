import { Avatar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Avatar } from '@neko-os/ui'

<Avatar initials="xs" xs red />
<Avatar initials="sm" sm red />
<Avatar initials="md" md red />
<Avatar initials="lg" lg red />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Avatar initials="xs" xs red />
    <Avatar initials="sm" sm orange />
    <Avatar initials="md" md green />
    <Avatar initials="lg" lg blue />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
