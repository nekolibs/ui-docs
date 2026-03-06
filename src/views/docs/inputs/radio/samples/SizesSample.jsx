import { Radio, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Radio } from '@neko-os/ui'

<Radio xs label="X Small" />
<Radio sm label="Small" />
<Radio md label="Medium" />
<Radio lg label="Large" />
`

const CONTENT = (
  <View flex center>
    <View gap={10}>
      <Radio xs label="X Small" />
      <Radio sm label="Small" />
      <Radio md label="Medium" />
      <Radio lg label="Large" />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
