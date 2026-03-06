import { Tag, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Tag } from '@neko-os/ui'

<Tag label="Tag" icon="thumb-up-fill" />
<Tag label="Tag" icon="thumb-up-fill" fill />
<Tag label="Tag" icon="arrow-right-line" invert />
<Tag label="Tag" icon="checkbox-circle-line" green />
<Tag icon="checkbox-circle-line" ratio={1} fill red />
<Tag icon="checkbox-circle-line" ratio={1} round fill />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Tag label="Tag" icon="thumb-up-fill" />
    <Tag label="Tag" icon="thumb-up-fill" fill />
    <Tag label="Tag" icon="arrow-right-line" invert />
    <Tag label="Tag" icon="checkbox-circle-line" green />
    <Tag icon="checkbox-circle-line" ratio={1} fill red />
    <Tag icon="checkbox-circle-line" ratio={1} round fill />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="With icons" code={CODE} content={CONTENT} />
}
