import { AvatarLabel, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { AvatarLabel } from '@neko-os/ui'

<AvatarLabel label="Full green" green />
<AvatarLabel label="Avatar green" avatarColor="green" />
<AvatarLabel label="Avatar red" avatarColor="red" />
<AvatarLabel label="Avatar red-20" avatarColor="red-20" />
<AvatarLabel label="Avatar red+20" avatarColor="red+20" />
<AvatarLabel label="Avatar custom" avatarColor="#e3e3e3" />
<AvatarLabel label="Avatar custom" avatarColor="#00000075" />
`

const CONTENT = (
  <View flex center>
    <View gap={10}>
      <AvatarLabel label="Full green" green />
      <AvatarLabel label="Avatar green" avatarColor="green" />
      <AvatarLabel label="Avatar red" avatarColor="red" />
      <AvatarLabel label="Avatar red-20" avatarColor="red-20" />
      <AvatarLabel label="Avatar red+20" avatarColor="red+20" />
      <AvatarLabel label="Avatar custom" avatarColor="#e3e3e3" />
      <AvatarLabel label="Avatar custom" avatarColor="#00000075" />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
