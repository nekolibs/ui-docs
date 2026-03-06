import { AvatarLabel, Card, IconLabel, LabelValue, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { LabelValue, AvatarLabel, IconLabel } from '@neko-os/ui'

<LabelValue label="Author" value={<AvatarLabel name="John Doe" avatarSize="xs" avatarColor="blue" />} spread />
<LabelValue label="Status" spread>
  <IconLabel label="Approved" icon="checkbox-circle-fill" invert iconColor="green" />
</LabelValue>
`

const CONTENT = (
  <View gap={10} flex center>
    <Card width={350} maxWidth={'100%'} gap="lg">
      <LabelValue label="Author" value={<AvatarLabel name="John Doe" avatarSize="xs" avatarColor="blue" />} spread />
      <LabelValue label="Status" spread>
        <IconLabel label="Approved" icon="checkbox-circle-fill" invert iconColor="green" />
      </LabelValue>
    </Card>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Custom Value" code={CODE} content={CONTENT} bg="transparent" border />
}
