import { View, RateInput } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { RateInput } from '@neko-os/ui'

<RateInput sm />
<RateInput md />
<RateInput lg />
`

function Content() {
  return (
    <View gap={10} flex centerV>
      <RateInput value={3} sm />
      <RateInput value={3} md />
      <RateInput value={3} lg />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={<Content />} />
}
