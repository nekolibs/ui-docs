import { LinkInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { LinkInput } from '@neko-os/ui'

<LinkInput bg="overlayBG" />
<LinkInput bg="green_op20" />
<LinkInput borderColor="green-20" />
<LinkInput borderColor="red-20" />
`

const CONTENT = (
  <View gap={10}>
    <LinkInput bg="overlayBG" placeholder="BG color overlayBG" />
    <LinkInput bg="green_op20" placeholder="BG color green_op20" />
    <LinkInput borderColor="green-20" placeholder="Border color green-20" />
    <LinkInput borderColor="red-20" placeholder="Border color red-20" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
