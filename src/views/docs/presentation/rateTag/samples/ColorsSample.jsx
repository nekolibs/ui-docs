import { View, RateTag } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { RateTag } from '@neko-os/ui'

<RateTag green />
<RateTag color="#000000" />
<RateTag color="primary_op70" />
<RateTag color="red+20" />
<RateTag color="red-20" />
`

function Content() {
  return (
    <View gap={10} flex center row wrap>
      <RateTag value={3} yellow />
      <RateTag value={3} yellow outline={false} />
      <RateTag value={3} color="#000000" />
      <RateTag value={3} color="primary_op70" />
      <RateTag value={3} color="red+20" />
      <RateTag value={3} color="red-20" />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={<Content />} />
}
