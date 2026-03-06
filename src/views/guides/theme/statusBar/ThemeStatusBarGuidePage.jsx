import { Text, View } from '@neko-os/ui'

import SetupSection from './sections/SetupSection'
import HowItWorksSection from './sections/HowItWorksSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <View>
        <Text h1>ThemeStatusBar</Text>
        <Text text3>
          <Text red>Currently only works on mobile (React Native).</Text>
        </Text>
      </View>

      <SetupSection />
      <HowItWorksSection />
    </View>
  )
}
