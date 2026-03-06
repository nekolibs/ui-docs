import { Button, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button } from '@neko-os/ui'

<Button label="Primary" primary />
<Button label="Primary-10" color="primary-10" />
<Button label="Green" green />
<Button label="Blue" blue />
<Button label="Red" red />
<Button label="Custom" color="#e3e3e3" />
<Button label="Custom" color="#00000080" />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Button label="Primary" primary />
    <Button label="Primary-10" color="primary-10" />
    <Button label="Green" green />
    <Button label="Blue" blue />
    <Button label="Red" red />
    <Button label="Custom" color="#e3e3e3" />
    <Button label="Custom" color="#00000075" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
