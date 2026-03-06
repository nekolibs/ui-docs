import { Button, Segment, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button, Segment } from '@neko-os/ui'

<Segment sm gap={1}>
  <Button label="Something" />
  <Button icon="more-fill"  />
</Segment>

<Segment sm>
  <Button label="Green" green />
  <Button label="Yellow" yellow />
  <Button label="Red" red />
</Segment>
`

const CONTENT = (
  <View row gap={15} flex center>
    <Segment sm gap={1}>
      <Button label="Something" />
      <Button icon="more-fill" />
    </Segment>

    <Segment sm>
      <Button label="Green" green />
      <Button label="Yellow" yellow />
      <Button label="Red" red />
    </Segment>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Segmented" code={CODE} content={CONTENT} />
}
