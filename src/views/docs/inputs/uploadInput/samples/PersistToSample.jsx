import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { UploadInput } from '@neko-os/ui'

// persistTo copies picked files to a permanent app directory (native only).
// Uses expo-file-system. Target format: "document/<subdir>" or "cache/<subdir>".

// Persist event photos with compression + save to device gallery
<UploadInput
  grid
  multiple
  maxCount={5}
  accept="image/*"
  persistTo="document/events"
  saveToLibrary
/>

// Persist avatars with custom compression
<UploadInput
  accept="image/*"
  persistTo="document/avatars"
  compress={{ image: { maxWidth: 512, maxHeight: 512, quality: 0.7 } }}
/>
`

export default function Sample() {
  return (
    <View gap="md">
      <Text h4 text3>persistTo (native)</Text>
      <Text text3>
        Copies picked files to a permanent app directory using expo-file-system. Without this prop,
        files use temporary URIs that the OS may clean up. Combine with saveToLibrary to also save
        camera captures to the device Photos library.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
