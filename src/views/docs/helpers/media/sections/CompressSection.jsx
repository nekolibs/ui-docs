import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const COMPRESS_ASSET_CODE = `
import { compressAsset } from '@neko-os/ui'

// Compress a single asset (image or video).
// Returns a new asset object with the compressed URI.
// Non-media files (PDFs, etc.) pass through unchanged.
// Never throws — returns the original asset on failure.

const compressed = await compressAsset(asset)
// asset: { uri, name, type, size, width, height }
// returns: { uri: '<compressed>', name, type, size, width, height }

// Custom options
const compressed = await compressAsset(asset, {
  image: { maxWidth: 512, maxHeight: 512, quality: 0.7 },
  video: { maxSize: 480 },
})
`

const COMPRESS_ASSETS_CODE = `
import { compressAssets } from '@neko-os/ui'

// Compress multiple assets in parallel.
const compressed = await compressAssets(assets)

// With custom options
const compressed = await compressAssets(assets, {
  image: { maxWidth: 1920, maxHeight: 1920, quality: 0.8 },
})
`

const DEFAULTS_CODE = `
// Default compression settings

// Images (native: react-native-compressor, web: Canvas API)
{ maxWidth: 1920, maxHeight: 1920, quality: 0.8 }

// Videos (native only, no web compression)
{ maxSize: 720 }
`

export default function CompressSection() {
  return (
    <View gap="lg">
      <Text h3>compressAsset / compressAssets</Text>

      <Text text3>
        Compress images and videos before storage or upload. Uses react-native-compressor on native
        (optional dependency, try/catch imported) and Canvas API on web. Non-media files (PDFs,
        documents) pass through unchanged.
      </Text>
      <CodeBlock code={COMPRESS_ASSET_CODE} />

      <Text h4>Batch Compression</Text>
      <CodeBlock code={COMPRESS_ASSETS_CODE} />

      <Text h4>Defaults</Text>
      <CodeBlock code={DEFAULTS_CODE} />
    </View>
  )
}
