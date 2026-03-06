import { View, SegmentedPicker } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { SegmentedPicker } from '@neko-os/ui'

<SegmentedPicker options={OPTIONS} sm />
<SegmentedPicker options={OPTIONS} md />
<SegmentedPicker options={OPTIONS} lg />
`

const OPTIONS = [
  { label: 'Option A', value: 'A' },
  { label: 'Option B', value: 'B' },
  { label: 'Option C', value: 'C' },
]

const CONTENT = (
  <View gap={20} flex center>
    <SegmentedPicker initialValue={'A'} options={OPTIONS} sm />
    <SegmentedPicker initialValue={'A'} options={OPTIONS} md />
    <SegmentedPicker initialValue={'A'} options={OPTIONS} lg />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
