import { AvatarLabel, Button, TopBar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { AvatarLabel, Button, TopBar } from '@neko-os/ui'

<TopBar
  left={<Button icon="arrow-left-s-line" ratio={1} transparent />}
  right={<Button icon="more-2-fill" ratio={1} transparent />}
>
  <AvatarLabel
    label="Jack Circle"
    text
    src="https://randomuser.me/api/portraits/men/4.jpg"
    avatarSize="xs"
    strong
  />
</TopBar>
`

const CONTENT = (
  <View fullW>
    <TopBar
      left={<Button icon="arrow-left-s-line" ratio={1} transparent />}
      right={<Button icon="more-2-fill" ratio={1} transparent />}
      bg="overlayBG"
      br="lg"
    >
      <AvatarLabel
        label="Jack Circle"
        text
        src="https://randomuser.me/api/portraits/men/4.jpg"
        avatarSize="xs"
        strong
      />
    </TopBar>
  </View>
)

export default function CustomContentSample() {
  return <SampleCodeBlock title="Custom Center Content" code={CODE} content={CONTENT} bg="transparent" border />
}
