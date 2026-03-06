import { Button, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button } from '@neko-os/ui'

<Button label="Button" icon="thumb-up-fill" />
<Button label="Button" icon="thumb-up-fill" outline />
<Button label="Button" icon="arrow-right-line" invert />
<Button label="Button" icon="checkbox-circle-line" green />
<Button icon="checkbox-circle-line" ratio={1} />
<Button icon="checkbox-circle-line" ratio={1} round />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Button label="Button" icon="thumb-up-fill" />
    <Button label="Button" icon="thumb-up-fill" outline />
    <Button label="Button" icon="arrow-right-line" invert />
    <Button label="Button" icon="checkbox-circle-line" green />
    <Button icon="checkbox-circle-line" ratio={1} />
    <Button icon="checkbox-circle-line" ratio={1} round />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="With icons" code={CODE} content={CONTENT} />
}
