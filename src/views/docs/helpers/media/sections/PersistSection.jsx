import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const PERSIST_CODE = `
import { persistFile, removeFile } from '@neko-os/ui'

// Copy a file to a permanent app directory (native only).
// Returns the durable URI string. Never throws — returns original URI on failure.
// Uses expo-file-system (optional dependency, try/catch imported).

const uri = persistFile(
  asset.uri,                    // source URI (file://)
  'document/photos',            // target: "document/<subdir>" or "cache/<subdir>"
  { name: asset.name }          // optional, used to derive file extension
)
// uri: "file:///path/to/app/document/photos/1234567890_0_123456.jpg"

// Filenames are always unique (timestamp + counter + random) to avoid collisions.
`

const REMOVE_CODE = `
import { removeFile } from '@neko-os/ui'

// Delete a persisted file. No-op if missing or unavailable.
removeFile(uri)
`

const OPEN_CODE = `
import { openCamera, openLibrary } from '@neko-os/ui'

// Low-level: open camera/library picker and return normalized assets.
// Returns [] if cancelled, permission denied, or expo-image-picker unavailable.
// Options are passed directly to expo-image-picker.

const assets = await openCamera({
  allowsMultipleSelection: false,
  mediaTypes: ['images'],
})

const assets = await openLibrary({
  allowsMultipleSelection: true,
  selectionLimit: 5,
  mediaTypes: ['images', 'videos'],
})

// Normalized asset shape:
// { uri, name, type, size, width, height }
`

export default function PersistSection() {
  return (
    <View gap="lg">
      <Text h3>persistFile / removeFile</Text>

      <Text text3>
        Copy files to permanent app storage using expo-file-system. Without persistence,
        image picker URIs are temporary and may be cleaned up by the OS.
      </Text>
      <CodeBlock code={PERSIST_CODE} />

      <Text h4>removeFile</Text>
      <CodeBlock code={REMOVE_CODE} />

      <Text h3>openCamera / openLibrary</Text>
      <Text text3>
        Low-level picker wrappers around expo-image-picker. Handle permissions and normalize the
        asset shape. For most use cases, prefer pickFromCamera/pickFromLibrary which compose these
        with compression and persistence.
      </Text>
      <CodeBlock code={OPEN_CODE} />
    </View>
  )
}
