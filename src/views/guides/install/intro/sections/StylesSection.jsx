import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
// Import once at your app entry (main.jsx, App.js, ...)
import '@neko-os/ui/dist/index.css'
`

export default function StylesSection() {
  return (
    <View gap="md">
      <View>
        <Text h3>Global Styles</Text>
        <Text text3>
          Import the library stylesheet once at your app entry. It ships base styles and the keyframe
          animations components rely on (spinners, effects). Without it, loaders won't animate and sizing
          may be off.
        </Text>
      </View>
      <CodeBlock code={CODE} />
      <Text text3>
        Works the same on web (Vite, Next.js) and React Native Web (Expo) — the bundler includes it
        automatically. On native (iOS/Android) the import is ignored by Metro, so no platform-specific
        files or extra setup are needed.
      </Text>
    </View>
  )
}
