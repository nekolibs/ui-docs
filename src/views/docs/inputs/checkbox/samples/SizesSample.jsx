import { Checkbox, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Checkbox } from '@neko-os/ui'

<Checkbox xs label="X Small" />
<Checkbox sm label="Small" />
<Checkbox md label="Medium" />
<Checkbox lg label="Large" />
`

const CONTENT = (
  <View flex center>
    <View gap={10}>
      <Checkbox xs label="X Small" />
      <Checkbox sm label="Small" />
      <Checkbox md label="Medium" />
      <Checkbox lg label="Large" />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
