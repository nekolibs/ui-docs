import { Tag, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Tag } from '@neko-os/ui'

<Tag label="Small Tag" sm />
<Tag label="Medium Tag" md />
<Tag label="Large Tag" lg />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Tag label="Small Tag" sm />
    <Tag label="Medium Tag" md />
    <Tag label="Large Tag" lg />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
