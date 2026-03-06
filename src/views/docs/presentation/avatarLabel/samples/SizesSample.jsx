import { AvatarLabel, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { AvatarLabel } from '@neko-os/ui'

<AvatarLabel label="John Doe" xs />
<AvatarLabel label="John Doe" sm />
<AvatarLabel label="John Doe" md />
<AvatarLabel label="John Doe" lg />
<AvatarLabel label="John Doe" xl />
<AvatarLabel label="John Doe" xxl />
<AvatarLabel label="John Doe" xxxl />
`

const CONTENT = (
  <View gap={10} flex center>
    <AvatarLabel label="John Doe" xs />
    <AvatarLabel label="John Doe" sm />
    <AvatarLabel label="John Doe" md />
    <AvatarLabel label="John Doe" lg />
    <AvatarLabel label="John Doe" xl />
    <AvatarLabel label="John Doe" xxl />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
