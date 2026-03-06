import { DatePicker, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DatePicker } from '@neko-os/ui'

<DatePicker value={value} onChange={setValue} />
`

const CONTENT = (
  <View row gap={15} flex center>
    <DatePicker />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
