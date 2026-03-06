import { Link, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Link } from '@neko-os/ui'

<Link>
  ...
</Link>
`

const CONTENT = (
  <View row gap={15} flex center>
    <Link>
      <View bg="primary" ratio={1} center br="md" padding="md">
        <Text center>Custom</Text>
        <Text center>children</Text>
      </View>
    </Link>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Custom children" code={CODE} content={CONTENT} />
}
