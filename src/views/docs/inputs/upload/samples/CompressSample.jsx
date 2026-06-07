import { Button, Icon, Link, Text, Upload, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Upload, Button, Icon, Text, Link } from '@neko-os/ui'

// Compression is enabled by default (compress={true}).
// Images are resized to max 1920px and quality 0.8.
// Videos are compressed to 720p (native only).
// Non-media files (PDFs, etc.) pass through unchanged.

// Default compression
<Upload compress>
  {({ open }) => <Button outline label="Compressed (default)" onPress={open} />}
</Upload>

// Custom compression settings
<Upload compress={{ image: { maxWidth: 512, maxHeight: 512, quality: 0.7 } }}>
  {({ open }) => <Button outline label="Avatar size" onPress={open} />}
</Upload>

// Disable compression
<Upload compress={false}>
  {({ open }) => <Button outline label="No compression" onPress={open} />}
</Upload>
`

const CONTENT = (
  <View gap="lg" flex>
    <Upload accept="image/*">
      {({ value, remove, open }) => (
        <View gap="md">
          <Button outline prefixIcon="image-line" label="Compressed (default)" onPress={open} />
          {value && (
            <View row gap="sm" centerV>
              <Icon name="file-line" size="sm" />
              <Text text3 flex>{value.name}</Text>
              <Link label="Remove" red onPress={() => remove(value)} />
            </View>
          )}
        </View>
      )}
    </Upload>

    <Upload accept="image/*" compress={{ image: { maxWidth: 512, maxHeight: 512, quality: 0.7 } }}>
      {({ value, remove, open }) => (
        <View gap="md">
          <Button outline prefixIcon="image-line" label="Avatar size (512px)" onPress={open} />
          {value && (
            <View row gap="sm" centerV>
              <Icon name="file-line" size="sm" />
              <Text text3 flex>{value.name}</Text>
              <Link label="Remove" red onPress={() => remove(value)} />
            </View>
          )}
        </View>
      )}
    </Upload>

    <Upload accept="image/*" compress={false}>
      {({ value, remove, open }) => (
        <View gap="md">
          <Button outline prefixIcon="image-line" label="No compression" onPress={open} />
          {value && (
            <View row gap="sm" centerV>
              <Icon name="file-line" size="sm" />
              <Text text3 flex>{value.name}</Text>
              <Link label="Remove" red onPress={() => remove(value)} />
            </View>
          )}
        </View>
      )}
    </Upload>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Compress" code={CODE} content={CONTENT} fullW />
}
