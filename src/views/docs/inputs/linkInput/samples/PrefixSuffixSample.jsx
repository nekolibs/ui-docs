import { Icon, Text, LinkInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { LinkInput, Text } from '@neko-os/ui'

<LinkInput prefix="username:" />
<LinkInput suffix="@gmail.com" />
<LinkInput prefix={<Icon name="shield-user-fill" red />} />
<LinkInput suffix={<Icon name="shield-user-fill" blue />} />
<LinkInput prefix={<Text red>Age:</Text>} />
<LinkInput suffix={<Text text3>Kg</Text>} />
`

const CONTENT = (
  <View gap={10}>
    <LinkInput prefix="username:" />
    <LinkInput suffix="@gmail.com" />
    <LinkInput prefix={<Icon name="shield-user-fill" red />} />
    <LinkInput suffix={<Icon name="shield-user-fill" blue />} />
    <LinkInput prefix={<Text red>Age:</Text>} />
    <LinkInput suffix={<Text text3>Kg</Text>} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Prefix and Suffix" code={CODE} content={CONTENT} />
}
