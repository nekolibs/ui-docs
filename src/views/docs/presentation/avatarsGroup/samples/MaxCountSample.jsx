import { Avatar, AvatarsGroup, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Avatar, AvatarsGroup } from '@neko-os/ui'

<AvatarsGroup maxCount={3}>
  <Avatar name="Alice" />
  <Avatar name="Bob" />
  <Avatar name="Charlie" />
  <Avatar name="Diana" />
  <Avatar name="Eve" />
</AvatarsGroup>
`

const CONTENT = (
  <View center fullH>
    <AvatarsGroup maxCount={3}>
      <Avatar name="Alice" color="blue" />
      <Avatar name="Bob" color="green" />
      <Avatar name="Charlie" color="purple" />
      <Avatar name="Diana" color="orange" />
      <Avatar name="Eve" color="cyan" />
    </AvatarsGroup>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Max Count" code={CODE} content={CONTENT} />
}
