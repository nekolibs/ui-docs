import { Link, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Link } from '@neko-os/ui'

<Link label="Inline link" inline />
`

const CONTENT = (
  <View gap={15} flex center>
    <Text>
      To learn more about <Link label="inline links" strong underline inline /> read the Neko UI docs
    </Text>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Inline" code={CODE} content={CONTENT} />
}
