import { Progress, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Progress } from '@neko-os/ui'

// value is interpreted against target (default 100)
<Progress value={30} target={50} />   // 60%
<Progress value={250} target={1000} /> // 25%
<Progress value={80} target={200} />   // 40%
`

const CONTENT = (
  <View gap="md">
    <View gap="xs">
      <Text text4>value=30, target=50</Text>
      <Progress value={30} target={50} />
    </View>

    <View gap="xs">
      <Text text4>value=250, target=1000</Text>
      <Progress value={250} target={1000} />
    </View>

    <View gap="xs">
      <Text text4>value=80, target=200</Text>
      <Progress value={80} target={200} />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Target" code={CODE} content={CONTENT} />
}
