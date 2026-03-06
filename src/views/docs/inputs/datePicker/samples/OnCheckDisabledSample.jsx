import { DatePicker, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DatePicker } from '@neko-os/ui'

// Remove weekends
<DatePicker onCheckDisabled={(date) => [0, 6].includes(date.day())} />
`

const CONTENT = (
  <View row gap={15} flex center>
    <DatePicker onCheckDisabled={(date) => [0, 6].includes(date.day())} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="onCheckDisabled" code={CODE} content={CONTENT} />
}
