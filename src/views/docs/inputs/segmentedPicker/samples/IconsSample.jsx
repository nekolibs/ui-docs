import { View, SegmentedPicker } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { SegmentedPicker } from '@neko-os/ui'

<SegmentedPicker
  options={[
    { icon: 'table-line', value: 'table' },
    { icon: 'calendar-2-line', value: 'calendar' },
  ]}
  round
/>

<SegmentedPicker
  options={[
    { icon: 'table-line', label: 'Table', value: 'table' },
    { icon: 'calendar-2-line', label: 'Calendar', value: 'calendar' },
  ]}
/>
`

const CONTENT = (
  <View gap={20} flex center>
    <SegmentedPicker
      initialValue={'table'}
      options={[
        { icon: 'table-line', value: 'table' },
        { icon: 'calendar-2-line', value: 'calendar' },
      ]}
      round
    />

    <SegmentedPicker
      initialValue={'table'}
      options={[
        { icon: 'table-line', label: 'Table', value: 'table' },
        { icon: 'calendar-2-line', label: 'Calendar', value: 'calendar' },
      ]}
    />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="With Icons" code={CODE} content={CONTENT} />
}
