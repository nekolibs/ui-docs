import { View, RateInput } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { RateInput } from '@neko-os/ui'

<RateInput value={value} onChange={onChange} />
`

function Content() {
  return (
    <View gap={10} flex centerV>
      <RateInput value={4} />
      <RateInput />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
