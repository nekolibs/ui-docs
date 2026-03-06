import { Button, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button } from '@neko-os/ui'

<Button label="Full Width" fullW navy />
<Button label="Rounded Full Width" fullW round red />
<Button label="Outlined Full Width" fullW outline orange />
<Button label="No Radius Full Width" fullW br={0} blue />
<Button label="Custom Width Button" width={300} />
`

const CONTENT = (
  <View gap={15} flex center>
    <Button label="Full Width" fullW navy />
    <Button label="Rounded Full Width" fullW round red />
    <Button label="Outlined Full Width" fullW outline orange />
    <Button label="No Radius Full Width" fullW br={0} blue />
    <Button label="Custom Width Button" width={300} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Width" code={CODE} content={CONTENT} />
}
