import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { Upload, Button } from '@neko-os/ui'

// persistTo copies picked files to a permanent app directory (native only).
// Without persistTo, files use temporary URIs that may be cleaned up by the OS.
// Uses expo-file-system under the hood. Target format: "document/<subdir>" or "cache/<subdir>".

// Persist to document directory
<Upload persistTo="document/avatars" accept="image/*">
  {({ open }) => <Button outline label="Pick Avatar" onPress={open} />}
</Upload>

// Persist to cache (temporary, OS may clean up)
<Upload persistTo="cache/temp" accept="image/*">
  {({ open }) => <Button outline label="Pick Temp Image" onPress={open} />}
</Upload>

// Combined with saveToLibrary (saves camera captures to device Photos)
<Upload persistTo="document/photos" saveToLibrary accept="image/*">
  {({ open }) => <Button outline label="Take Photo" onPress={open} />}
</Upload>
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
