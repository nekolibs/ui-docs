import { Button, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button } from '@neko-os/ui'

<Button label="XS Button" xs />
<Button label="SM Button" sm />
<Button label="MD Button" md />
<Button label="LG Button" lg />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Button label="XS Button" xs />
    <Button label="SM Button" sm />
    <Button label="MD Button" md />
    <Button label="LG Button" lg />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
