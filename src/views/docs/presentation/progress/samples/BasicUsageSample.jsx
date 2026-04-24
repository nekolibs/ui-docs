import { Progress, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Progress } from '@neko-os/ui'

<Progress value={0} />
<Progress value={30} />
<Progress value={70} />
<Progress value={100} />
`

const CONTENT = (
  <View gap="md">
    <Progress value={0} />
    <Progress value={30} />
    <Progress value={70} />
    <Progress value={100} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
