import { Tag, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Tag } from '@neko-os/ui'

<Tag label="No Radius" br={0} />
<Tag label="Small Radius" br="sm" />
<Tag label="Custom Radius" br={10} />
<Tag label="Round" round />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Tag label="No Radius" br={0} />
    <Tag label="Small Radius" br="sm" />
    <Tag label="Custom Radius" br={10} />
    <Tag label="Round" round />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Shapes" code={CODE} content={CONTENT} />
}
