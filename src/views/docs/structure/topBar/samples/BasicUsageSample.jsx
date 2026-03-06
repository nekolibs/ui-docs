import { TopBar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { TopBar } from '@neko-os/ui'

<TopBar title="Page Title" />
`

const CONTENT = (
  <View fullW>
    <TopBar title="Page Title" bg="overlayBG" br="lg" />
  </View>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} bg="transparent" border />
}
