import { LinkInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { LinkInput } from '@neko-os/ui'

<LinkInput placeholder="Loading" loading />
<LinkInput placeholder="Disabled" disabled />
<LinkInput placeholder="Error" error />
`

const CONTENT = (
  <View gap={15}>
    <LinkInput placeholder="Loading" loading onPress={alert} />
    <LinkInput placeholder="Disabled" disabled onPress={alert} />
    <LinkInput placeholder="Error" error />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
