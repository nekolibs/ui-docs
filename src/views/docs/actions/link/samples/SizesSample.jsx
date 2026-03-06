import { Link, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Link } from '@neko-os/ui'

<Link label="h1 link" h1 />
<Link label="h2 link" h2 />
<Link label="h3 link" h3 />
<Link label="h4 link" h4 />
<Link label="h5 link" h5 />
<Link label="h5 link" h6 />
<Link label="p link" p />
<Link label="sm link" sm />
<Link label="xs link" xs />
<Link label="Custom" size={12} />
`

const CONTENT = (
  <View gap={15} flex center>
    <Link label="h1 link" h1 />
    <Link label="h2 link" h2 />
    <Link label="h3 link" h3 />
    <Link label="h4 link" h4 />
    <Link label="h5 link" h5 />
    <Link label="h5 link" h6 />
    <Link label="p link" p />
    <Link label="sm link" sm />
    <Link label="xs link" xs />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
