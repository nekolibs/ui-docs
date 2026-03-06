import { Text, View } from '@neko-os/ui'

import IntroSection from './sections/IntroSection'
import HowItWorksSection from './sections/HowItWorksSection'
import AvailableModifiersSection from './sections/AvailableModifiersSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Modifiers</Text>

      <IntroSection />
      <HowItWorksSection />
      <AvailableModifiersSection />
    </View>
  )
}
