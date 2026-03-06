import { View, RateTag } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { RateTag } from '@neko-os/ui'

<RateTag sm />
<RateTag md />
<RateTag lg />
`

function Content() {
  return (
    <View gap={10} flex center row wrap>
      <RateTag value={3} sm />
      <RateTag value={3} md />
      <RateTag value={3} lg />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={<Content />} />
}
