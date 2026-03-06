import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { AnimatedTopBar, Button } from '@neko-os/ui'

// Fade only (disable slide)
<AnimatedTopBar
  title="Fade Only"
  left={<Button icon="arrow-left-s-line" ratio={1} mainBG />}
  slide={false}
/>

// Slide only (disable fade)
<AnimatedTopBar
  title="Slide Only"
  left={<Button icon="arrow-left-s-line" ratio={1} mainBG />}
  fade={false}
/>
`

const CONTENT = <View height={100} fullW center bg="overlayBG" br="lg" />

export default function SlideSample() {
  return <SampleCodeBlock title="Disabling Animations" code={CODE} content={CONTENT} />
}
