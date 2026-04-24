import { PasswordInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { PasswordInput } from '@neko-os/ui'

<PasswordInput sm />
<PasswordInput md />
<PasswordInput lg />
`

const CONTENT = (
  <View gap={10}>
    <PasswordInput sm placeholder="Small" />
    <PasswordInput md placeholder="Medium" />
    <PasswordInput lg placeholder="Large" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
