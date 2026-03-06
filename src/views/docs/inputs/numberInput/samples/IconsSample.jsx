import { NumberInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberInput } from '@neko-os/ui'

<NumberInput prefixIcon="shield-user-fill" />
<NumberInput suffixIcon="shield-user-fill" />
<NumberInput prefixIcon="shield-user-fill" suffixIcon="arrow-down-s-fill" />
`

const CONTENT = (
  <View gap={10}>
    <NumberInput prefixIcon="shield-user-fill" placeholder="With prefix icon" />
    <NumberInput suffixIcon="shield-user-fill" placeholder="With suffix icon" />
    <NumberInput prefixIcon="shield-user-fill" suffixIcon="arrow-down-s-fill" placeholder="Both" />
    <NumberInput sm prefixIcon="user-line" placeholder="Small icon" />
    <NumberInput md prefixIcon="user-line" placeholder="Medium icon" />
    <NumberInput lg prefixIcon="user-line" placeholder="Large icon" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Icons" code={CODE} content={CONTENT} />
}
