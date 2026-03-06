import { Switch, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Switch } from '@neko-os/ui'

<Switch xs label="X Small" />
<Switch sm label="Small" />
<Switch md label="Medium" />
<Switch lg label="Large" />
`

const CONTENT = (
  <View flex center>
    <View gap={10}>
      <Switch xs label="X Small" />
      <Switch sm label="Small" />
      <Switch md label="Medium" />
      <Switch lg label="Large" />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
