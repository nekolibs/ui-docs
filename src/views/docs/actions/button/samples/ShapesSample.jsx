import { Button, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button } from '@neko-os/ui'

<Button label="No Radius" br={0} />
<Button label="Small Radius" br="sm" />
<Button label="Custom Radius" br={10} />
<Button label="Round" round />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Button label="No Radius" br={0} />
    <Button label="Small Radius" br="sm" />
    <Button label="Custom Radius" br={10} />
    <Button label="Round" round />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Shapes" code={CODE} content={CONTENT} />
}
