import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ImageBackground, ParallaxHeader } from '@neko-os/ui'

// Slower parallax (moves less)
<ParallaxHeader height={300} parallaxSpeed={0.3}>
  <ImageBackground src="https://example.com/image.jpg" height={300} />
</ParallaxHeader>

// Faster parallax (moves more)
<ParallaxHeader height={300} parallaxSpeed={0.8}>
  <ImageBackground src="https://example.com/image.jpg" height={300} />
</ParallaxHeader>

// Disable rubber band resistance effect
<ParallaxHeader height={300} disableResistence>
  <ImageBackground src="https://example.com/image.jpg" height={300} />
</ParallaxHeader>
`

const CONTENT = <View height={100} fullW center bg="overlayBG" br="lg" />

export default function ParallaxSpeedSample() {
  return <SampleCodeBlock title="Parallax Speed & Options" code={CODE} content={CONTENT} />
}
