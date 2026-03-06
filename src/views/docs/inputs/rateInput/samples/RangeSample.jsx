import { View, RateInput } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { RateInput } from '@neko-os/ui'

<RateInput max={3} />
<RateInput max={5} />
<RateInput max={7} />
<RateInput max={10} />
`

function Content() {
  return (
    <View gap={10} flex centerV>
      <RateInput value={2} max={3} />
      <RateInput value={3} max={5} />
      <RateInput value={4} max={7} />
      <RateInput value={7} max={10} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Range" code={CODE} content={<Content />} />
}
