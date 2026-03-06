import { Button, Segment, TextInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { TextInput, Segment } from '@neko-os/ui'

<Segment>
  <TextInput placeholder="First Name" flex />
  <TextInput placeholder="Last Name" flex />
  <Button icon="send-plane-2-line" />
</Segment>
`

function Content() {
  return (
    <View gap={10} flex centerV>
      <Segment>
        <TextInput placeholder="First Name" flex />
        <TextInput placeholder="Last Name" flex />
        <Button icon="send-plane-2-line" />
      </Segment>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Segmented" code={CODE} content={<Content />} />
}
