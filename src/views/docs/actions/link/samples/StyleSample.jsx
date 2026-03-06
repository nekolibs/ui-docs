import { Link, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Link } from '@neko-os/ui'

<Link label="Bold" strong />
<Link label="Extra Bold" weight={900} />
<Link label="Underline" underline />
<Link label="Italic" italic />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Link label="Bold" strong />
    <Link label="Extra Bold" weight={900} />
    <Link label="Underline" underline />
    <Link label="Italic" italic />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Style" code={CODE} content={CONTENT} />
}
