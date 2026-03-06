import { Tag, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Tag } from '@neko-os/ui'

<Tag label="Normal" />
<Tag label="Loading" loading />
<Tag label="Disabled" disabled />
<Tag label="Both" loading disabled />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Tag label="Normal" />
    <Tag label="Loading" loading />
    <Tag label="Disabled" disabled />
    <Tag label="Both" loading disabled />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
