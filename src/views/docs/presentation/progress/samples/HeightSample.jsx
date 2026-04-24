import { Progress, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Progress } from '@neko-os/ui'

<Progress value={60} height={4} />
<Progress value={60} height={8} />
<Progress value={60} height={16} />
<Progress value={60} height={24} />
`

const CONTENT = (
  <View gap="md">
    <Progress value={60} height={4} />
    <Progress value={60} height={8} />
    <Progress value={60} height={16} />
    <Progress value={60} height={24} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Height" code={CODE} content={CONTENT} />
}
