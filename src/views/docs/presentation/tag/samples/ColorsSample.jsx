import { Tag, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Tag } from '@neko-os/ui'

<Tag label="Green" green />
<Tag label="Blue" blue />
<Tag label="Red" red />
<Tag label="Custom" color="#e3e3e3" />
<Tag label="Custom" color="#00000075" fill />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Tag label="Green" green />
    <Tag label="Blue" blue />
    <Tag label="Red" red />
    <Tag label="Custom" color="#e3e3e3" />
    <Tag label="Custom" color="#00000075" fill />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
