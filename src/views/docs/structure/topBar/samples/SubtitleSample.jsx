import { TopBar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { TopBar } from '@neko-os/ui'

<TopBar title="Page Title" subtitle="Additional info" />
`

const CONTENT = (
  <View fullW>
    <TopBar title="Page Title" subtitle="Additional info" bg="overlayBG" br="lg" />
  </View>
)

export default function SubtitleSample() {
  return <SampleCodeBlock title="With Subtitle" code={CODE} content={CONTENT} bg="transparent" border />
}
