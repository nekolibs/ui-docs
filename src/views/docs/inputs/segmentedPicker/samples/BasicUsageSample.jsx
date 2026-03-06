import { View, SegmentedPicker } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { SegmentedPicker } from '@neko-os/ui'

<SegmentedPicker
  value={value}
  onChange={onChange}
  options={[
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ]}
/>
`

const CONTENT = (
  <View row gap={20} flex center>
    <SegmentedPicker
      initialValue={'A'}
      options={[
        { label: 'Option A', value: 'A' },
        { label: 'Option B', value: 'B' },
        { label: 'Option C', value: 'C' },
      ]}
    />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
