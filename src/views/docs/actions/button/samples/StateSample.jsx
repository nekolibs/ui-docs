import { Button, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button } from '@neko-os/ui'

<Button label="Normal" onPress={() => alert(1)} />
<Button label="Loading" loading onPress={() => alert(2)} />
<Button label="Disabled" disabled onPress={() => alert(3)} />
<Button label="Both" loading disabled onPress={() => alert(4)} />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Button label="Normal" onPress={() => alert(1)} />
    <Button label="Loading" loading onPress={() => alert(2)} />
    <Button label="Disabled" disabled onPress={() => alert(3)} />
    <Button label="Both" loading disabled onPress={() => alert(4)} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
