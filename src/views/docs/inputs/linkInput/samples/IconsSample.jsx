import { LinkInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { LinkInput } from '@neko-os/ui'

<LinkInput prefixIcon="shield-user-fill" />
<LinkInput suffixIcon="shield-user-fill" />
<LinkInput prefixIcon="shield-user-fill" suffixIcon="arrow-down-s-fill" />
`

const CONTENT = (
  <View gap={10}>
    <LinkInput prefixIcon="shield-user-fill" placeholder="With prefix icon" />
    <LinkInput suffixIcon="shield-user-fill" placeholder="With suffix icon" />
    <LinkInput prefixIcon="shield-user-fill" suffixIcon="arrow-down-s-fill" placeholder="Both" />
    <LinkInput sm prefixIcon="user-line" placeholder="Small icon" />
    <LinkInput md prefixIcon="user-line" placeholder="Medium icon" />
    <LinkInput lg prefixIcon="user-line" placeholder="Large icon" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Icons" code={CODE} content={CONTENT} />
}
