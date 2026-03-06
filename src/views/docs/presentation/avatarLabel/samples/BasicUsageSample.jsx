import { AvatarLabel, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { AvatarLabel } from '@neko-os/ui'

<AvatarLabel label="Jack Circle" text src="https://randomuser.me/api/portraits/men/4.jpg" />
<AvatarLabel label="Jack Square" text src="https://randomuser.me/api/portraits/men/4.jpg" square />
<AvatarLabel label="John Green" text avatarColor="green" />
<AvatarLabel label="John Square" text avatarColor="red" square />
<AvatarLabel label="Custom Initials" initials={'M'} text avatarColor="red" />
<AvatarLabel label="With Icon" icon="home-smile-line" avatarColor="text" />
`

const CONTENT = (
  <View flex center>
    <View gap={10}>
      <AvatarLabel label="Jack Circle" text src="https://randomuser.me/api/portraits/men/4.jpg" />
      <AvatarLabel label="Jack Square" text src="https://randomuser.me/api/portraits/men/4.jpg" square />
      <AvatarLabel label="John Green" text avatarColor="green" />
      <AvatarLabel label="John Square" text avatarColor="red" square />
      <AvatarLabel label="Custom Initials" initials={'M'} text avatarColor="red" />
      <AvatarLabel label="With Icon" icon="home-smile-line" avatarColor="text" />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
