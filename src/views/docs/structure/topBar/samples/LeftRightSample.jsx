import { Button, TopBar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button, TopBar } from '@neko-os/ui'

<TopBar
  title="Page Title"
  left={<Button icon="arrow-left-s-line" ratio={1} mainBG />}
  right={<Button icon="more-2-fill" ratio={1} mainBG />}
/>
`

const CONTENT = (
  <View fullW>
    <TopBar
      title="Page Title"
      left={<Button icon="arrow-left-s-line" ratio={1} mainBG />}
      right={<Button icon="more-2-fill" ratio={1} mainBG />}
      bg="overlayBG"
      br="lg"
    />
  </View>
)

export default function LeftRightSample() {
  return <SampleCodeBlock title="Left and Right Actions" code={CODE} content={CONTENT} bg="transparent" border />
}
