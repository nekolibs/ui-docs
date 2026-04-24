import { Avatar, AvatarsGroup, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Avatar, AvatarsGroup } from '@neko-os/ui'

<AvatarsGroup>
  <Avatar name="Alice" color="blue" />
  <Avatar name="Bob" color="green" />
  <Avatar name="Charlie" color="purple" />
</AvatarsGroup>
`

const CONTENT = (
  <View center fullH>
    <AvatarsGroup>
      <Avatar name="Alice" color="blue" />
      <Avatar name="Bob" color="green" />
      <Avatar name="Charlie" color="purple" />
    </AvatarsGroup>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
