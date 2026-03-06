import { DateInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DateInput } from '@neko-os/ui'

<DateInput placeholder="Loading" loading />
<DateInput placeholder="Disabled" disabled />
<DateInput placeholder="Error" error />
`

const CONTENT = (
  <View gap={15}>
    <DateInput placeholder="Loading" loading />
    <DateInput placeholder="Disabled" disabled />
    <DateInput placeholder="Error" error />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
