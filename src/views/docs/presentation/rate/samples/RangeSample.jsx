import { View, Rate } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Rate } from '@neko-os/ui'

<Rate max={3} />
<Rate max={5} />
<Rate max={7} />
<Rate max={10} />
`

function Content() {
  return (
    <View gap={10} flex centerV>
      <Rate value={2} max={3} />
      <Rate value={3} max={5} />
      <Rate value={4} max={7} />
      <Rate value={7} max={10} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Range" code={CODE} content={<Content />} />
}
