import { Avatar, AvatarsGroup, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Avatar, AvatarsGroup } from '@neko-os/ui'

<AvatarsGroup size="xs">...</AvatarsGroup>
<AvatarsGroup size="sm">...</AvatarsGroup>
<AvatarsGroup size="md">...</AvatarsGroup>
<AvatarsGroup size="lg">...</AvatarsGroup>
<AvatarsGroup size="xl">...</AvatarsGroup>
`

const AVATARS = [
  { name: 'Alice', color: 'blue' },
  { name: 'Bob', color: 'green' },
  { name: 'Charlie', color: 'purple' },
  { name: 'Diana', color: 'orange' },
]

const CONTENT = (
  <View gap="md" center>
    {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
      <AvatarsGroup key={size} size={size}>
        {AVATARS.map(({ name, color }) => (
          <Avatar key={name} name={name} color={color} />
        ))}
      </AvatarsGroup>
    ))}
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
