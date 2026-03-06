import { View, RateTag } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { RateTag } from '@neko-os/ui'

<RateTag value={4.3} />
<RateTag value={3.5} />
<RateTag value={0.5} outline={false} />
`

function Content() {
  return (
    <View gap={10} flex center row wrap>
      <RateTag value={4.3} />
      <RateTag value={3.5} />
      <RateTag value={0.5} outline={false} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
