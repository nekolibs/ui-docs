import { UploadInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { UploadInput } from '@neko-os/ui'

// Compression is enabled by default.
// Images: max 1920px, quality 0.8. Videos: 720p (native only).
// Non-media files pass through unchanged.

// Default compression (on by default)
<UploadInput accept="image/*" />

// Custom compression for small avatars
<UploadInput
  accept="image/*"
  compress={{ image: { maxWidth: 512, maxHeight: 512, quality: 0.7 } }}
/>

// Disable compression
<UploadInput accept="image/*" compress={false} />
`

const CONTENT = (
  <View gap="lg" flex>
    <View gap="xs">
      <UploadInput accept="image/*" />
    </View>
    <View gap="xs">
      <UploadInput accept="image/*" compress={{ image: { maxWidth: 512, maxHeight: 512, quality: 0.7 } }} />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Compress" code={CODE} content={CONTENT} fullW />
}
