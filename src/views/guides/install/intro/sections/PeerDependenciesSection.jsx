import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const WEB_REQUIRED_CODE = `
npm install dayjs ramda @remixicon/react
`

const NATIVE_REQUIRED_CODE = `
npm install dayjs ramda react-native-gesture-handler react-native-reanimated react-native-remix-icon react-native-safe-area-context
`

const NATIVE_OPTIONAL_CODE = `
# Gradient backgrounds (GradientView)
npm install expo-linear-gradient

# Blur backgrounds (BlurView)
npm install expo-blur

# Safe area support
npm install react-native-safe-area-context
`

export default function PeerDependenciesSection() {
  return (
    <View gap="md">
      <View>
        <Text h3>Peer Dependencies</Text>
        <Text text3>
          NekoUI requires a few peer dependencies depending on your platform. Some are optional and only needed if you
          use specific features.
        </Text>
      </View>

      <View>
        <Text h6>Web</Text>
        <CodeBlock code={WEB_REQUIRED_CODE} language="bash" />
      </View>

      <View>
        <Text h6>React Native</Text>
        <CodeBlock code={NATIVE_REQUIRED_CODE} language="bash" />
      </View>

      <View>
        <Text strong text3>
          Optional:
        </Text>
        <CodeBlock code={NATIVE_OPTIONAL_CODE} language="bash" />
      </View>
    </View>
  )
}
