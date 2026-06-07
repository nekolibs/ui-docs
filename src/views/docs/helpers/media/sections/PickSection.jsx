import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const PICK_CAMERA_CODE = `
import { pickFromCamera } from '@neko-os/ui'

// High-level helper: open camera → compress → persist in one call.
// Handles permissions, compression, and file persistence automatically.
// Returns null if cancelled or permission denied.

const asset = await pickFromCamera({
  persistTo: 'document/photos',   // persist to permanent app directory
  mediaTypes: ['images'],         // 'images', 'videos', or both
  compress: true,                 // true (default), false, or options object
})
// asset: { uri, name, type, size, width, height } or null

// Custom compression for avatars
const avatar = await pickFromCamera({
  persistTo: 'document/avatars',
  mediaTypes: ['images'],
  compress: { image: { maxWidth: 512, maxHeight: 512, quality: 0.7 } },
})
`

const PICK_LIBRARY_CODE = `
import { pickFromLibrary } from '@neko-os/ui'

// Same as pickFromCamera but opens the photo library.

// Single file (default)
const asset = await pickFromLibrary({
  persistTo: 'document/photos',
  mediaTypes: ['images'],
})
// returns: asset object or null

// Multiple files
const assets = await pickFromLibrary({
  persistTo: 'document/events',
  mediaTypes: ['images'],
  multiple: true,
  maxCount: 5,
})
// returns: array of assets (empty if cancelled)
`

const OPTIONS_CODE = `
// All options (all optional):

pickFromCamera({
  persistTo: 'document/photos',   // target dir (omit to keep temp URI)
  compress: true,                 // true | false | { image: {...}, video: {...} }
  multiple: false,                // false → returns single asset or null
                                  // true  → returns array (empty if cancelled)
  maxCount: 5,                    // selection limit when multiple
  mediaTypes: ['images'],         // ['images'], ['videos'], or ['images', 'videos']
  saveToLibrary: true,            // save camera captures to device Photos
})
`

export default function PickSection() {
  return (
    <View gap="lg">
      <Text h3>pickFromCamera / pickFromLibrary</Text>

      <Text text3>
        High-level helpers that combine the full media flow: open picker → check permissions →
        compress → persist. Native only (no-op on web). Each step is available as a separate
        low-level function for custom flows.
      </Text>

      <Text h4>pickFromCamera</Text>
      <CodeBlock code={PICK_CAMERA_CODE} />

      <Text h4>pickFromLibrary</Text>
      <CodeBlock code={PICK_LIBRARY_CODE} />

      <Text h4>Options</Text>
      <CodeBlock code={OPTIONS_CODE} />
    </View>
  )
}
