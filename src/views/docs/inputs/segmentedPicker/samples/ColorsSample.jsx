import { View, SegmentedPicker } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { SegmentedPicker } from '@neko-os/ui'

<SegmentedPicker options={OPTIONS} color="green" />
<SegmentedPicker options={OPTIONS} color="primary+10" />
<SegmentedPicker options={OPTIONS}  bg="text" color="mainBG" />
`

const OPTIONS = [
  { label: 'Option A', value: 'A' },
  { label: 'Option B', value: 'B' },
  { label: 'Option C', value: 'C' },
]

const CONTENT = (
  <View gap={20} flex center>
    <SegmentedPicker initialValue={'A'} options={OPTIONS} color="green" />
    <SegmentedPicker initialValue={'A'} options={OPTIONS} color="primary+10" />
    <SegmentedPicker initialValue={'A'} options={OPTIONS} bg="text" color="mainBG" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
