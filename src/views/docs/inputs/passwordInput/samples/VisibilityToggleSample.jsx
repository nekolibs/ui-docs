import { PasswordInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { PasswordInput } from '@neko-os/ui'

<PasswordInput placeholder="With toggle (default)" />
<PasswordInput placeholder="No toggle" hideToggle />
`

const CONTENT = (
  <View gap={10}>
    <PasswordInput placeholder="With toggle (default)" />
    <PasswordInput placeholder="No toggle" hideToggle />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Visibility Toggle" code={CODE} content={CONTENT} />
}
