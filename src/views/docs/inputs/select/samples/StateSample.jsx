import { Select, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Select } from '@neko-os/ui'

<Select placeholder="Loading" loading />
<Select placeholder="Disabled" disabled />
<Select placeholder="Error" error />
`

const OPTIONS = [
  { label: 'Option A', value: 'A' },
  { label: 'Option B', value: 'B' },
  { label: 'Option C', value: 'C' },
]

const CONTENT = (
  <View gap={15}>
    <Select placeholder="Loading" loading options={OPTIONS} />
    <Select placeholder="Disabled" disabled options={OPTIONS} />
    <Select placeholder="Error" error options={OPTIONS} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
