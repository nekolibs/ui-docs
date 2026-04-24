import { Progress, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Progress } from '@neko-os/ui'

<Progress value={60} color="primary" />
<Progress value={60} color="blue" />
<Progress value={60} color="green" />
<Progress value={60} color="orange" />
<Progress value={60} color="red" />
<Progress value={60} color="purple" bg="purple_op20" />
`

const CONTENT = (
  <View gap="md">
    <Progress value={60} color="primary" />
    <Progress value={60} color="blue" />
    <Progress value={60} color="green" />
    <Progress value={60} color="orange" />
    <Progress value={60} color="red" />
    <Progress value={60} color="purple" bg="purple_op20" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
