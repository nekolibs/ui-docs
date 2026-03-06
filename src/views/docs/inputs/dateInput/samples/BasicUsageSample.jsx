import { DateInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DateInput } from '@neko-os/ui'

<DateInput value={value} onChange={setValue} />
`

const CONTENT = (
  <View gap={15} flex center>
    <DateInput />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
