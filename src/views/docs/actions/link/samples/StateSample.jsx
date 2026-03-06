import { Link, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Link } from '@neko-os/ui'

<Link label="Normal" onPress={() => alert(1)} />
<Link label="Loading" loading onPress={() => alert(2)} />
<Link label="Disabled" disabled onPress={() => alert(3)} />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Link label="Normal" onPress={() => alert(1)} />
    <Link label="Loading" loading onPress={() => alert(2)} />
    <Link label="Disabled" disabled onPress={() => alert(3)} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
