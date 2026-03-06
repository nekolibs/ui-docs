import { View, RateTag } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { RateTag } from '@neko-os/ui'

<RateTag value={4} icon="heart-fill" />
<RateTag value={3} icon="emotion-normal-fill" />
`

function Content() {
  return (
    <View gap={10} flex center row wrap>
      <RateTag value={4} icon="heart-fill" />
      <RateTag value={3} icon="emotion-normal-fill" />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Icons" code={CODE} content={<Content />} />
}
