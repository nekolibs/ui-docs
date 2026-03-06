import { Link, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Link } from '@neko-os/ui'

<Link label="Show" text3 />
<Link label="Edit" color="blue" />
<Link label="Remove" red />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Link label="Show" strong underline text3 />
    <Link label="Edit" strong underline color="blue" />
    <Link label="Remove" strong underline red />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
