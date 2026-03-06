import { DateInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DateInput } from '@neko-os/ui'

// Remove weekends
<DateInput onCheckDisabled={(date) => [0, 6].includes(date.day())} />
`

const CONTENT = (
  <View gap={15} flex center>
    <DateInput onCheckDisabled={(date) => [0, 6].includes(date.day())} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="onCheckDisabled" code={CODE} content={CONTENT} />
}
