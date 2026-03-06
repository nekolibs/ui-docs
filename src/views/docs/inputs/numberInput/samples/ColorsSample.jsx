import { Checkbox, NumberInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberInput } from '@neko-os/ui'

<NumberInput bg="overlayBG" />
<NumberInput bg="green_op20" />
<NumberInput borderColor="green-20" />
<NumberInput borderColor="red-20" />
`

const CONTENT = (
  <View gap={10}>
    <NumberInput bg="overlayBG" placeholder="BG color overlayBG" />
    <NumberInput bg="green_op20" placeholder="BG color green_op20" />
    <NumberInput borderColor="green-20" placeholder="Border color green-20" />
    <NumberInput borderColor="red-20" placeholder="Border color red-20" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
