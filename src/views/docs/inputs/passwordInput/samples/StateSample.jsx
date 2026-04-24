import { PasswordInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { PasswordInput } from '@neko-os/ui'

<PasswordInput placeholder="Loading" loading />
<PasswordInput placeholder="Disabled" disabled />
<PasswordInput placeholder="Error" error />
`

const CONTENT = (
  <View gap={15}>
    <PasswordInput placeholder="Loading" loading />
    <PasswordInput placeholder="Disabled" disabled />
    <PasswordInput placeholder="Error" error />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
