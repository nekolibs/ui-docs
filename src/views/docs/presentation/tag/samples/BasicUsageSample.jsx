import { Tag, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Tag } from '@neko-os/ui'

<Tag label="Sample Tag" />
<Tag label="Fill Tag" fill />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Tag label="Sample Tag" />
    <Tag label="Fill Tag" fill />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
