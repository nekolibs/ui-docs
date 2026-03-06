import { View, Rate } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Rate } from '@neko-os/ui'

<Rate value={4.3} />
<Rate value={3.5} />
<Rate value={0.5} />
`

function Content() {
  return (
    <View gap={10} flex centerV>
      <Rate value={4.3} />
      <Rate value={3.5} />
      <Rate value={0.5} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
