import { View, RateInput } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { RateInput } from '@neko-os/ui'

<RateInput green />
<RateInput color="#000000" />
<RateInput color="primary_op70" />
<RateInput color="red+20" />
<RateInput color="red-20" />
<RateInput
  color={({ value }) => {
    if (value <= 2) return 'red'
    if (value >= 4) return 'green'
    return 'orange'
  }}
/>
`

function Content() {
  return (
    <View gap={10} flex centerV>
      <RateInput value={3} green />
      <RateInput value={3} color="#000000" />
      <RateInput value={3} color="primary_op70" />
      <RateInput value={3} color="red+20" />
      <RateInput value={3} color="red-20" />
      <RateInput
        value={3}
        color={({ value }) => {
          if (value <= 2) return 'red'
          if (value >= 4) return 'green'
          return 'orange'
        }}
      />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={<Content />} />
}
