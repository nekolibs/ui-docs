import { LinkInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { LinkInput } from '@neko-os/ui'

<LinkInput sm />
<LinkInput md />
<LinkInput lg />
`

const CONTENT = (
  <View gap={10}>
    <LinkInput sm placeholder="Small" />
    <LinkInput md placeholder="Medium" />
    <LinkInput lg placeholder="Large" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
