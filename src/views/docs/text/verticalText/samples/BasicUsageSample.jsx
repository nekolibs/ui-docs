import { VerticalText, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { VerticalText } from '@neko-os/ui'

<VerticalText label="Simple text" center height={200} width={30} strong />
<VerticalText label="Simple text" center height={200} width={30} strong invert />
`

const CONTENT = (
  <View row gap={15} flex center>
    <VerticalText label="Simple text" center height={200} width={30} strong />
    <VerticalText label="Simple text" center height={200} width={30} strong invert />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
