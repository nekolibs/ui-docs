import { Button, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button } from '@neko-os/ui'

<Button label="Sample Button" />
<Button label="Outline Button" outline />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Button label="Sample Button" />
    <Button label="Outline Button" outline />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
