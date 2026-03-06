import { Link, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Link } from '@neko-os/ui'

<Link label="Simple link text" strong underline />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Link label="Simple link text" strong underline />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
