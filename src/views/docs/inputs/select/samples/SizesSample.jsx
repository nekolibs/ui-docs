import { Select, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Select } from '@neko-os/ui'

<Select sm />
<Select md />
<Select lg />
`

const OPTIONS = [
  { label: 'Option A', value: 'A' },
  { label: 'Option B', value: 'B' },
  { label: 'Option C', value: 'C' },
]

const CONTENT = (
  <View gap={10}>
    <Select sm placeholder="Small" options={OPTIONS} />
    <Select md placeholder="Medium" options={OPTIONS} />
    <Select lg placeholder="Large" options={OPTIONS} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
