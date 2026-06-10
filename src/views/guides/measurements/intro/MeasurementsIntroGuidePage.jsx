import { Text, View } from '@neko-os/ui'

import IntroSection from './sections/IntroSection'
import ProviderSection from './sections/ProviderSection'
import FallbackChainSection from './sections/FallbackChainSection'
import HooksSection from './sections/HooksSection'

export default function Page() {
  return (
    <View flex gap={45}>
      <Text h1>Measurements</Text>

      <IntroSection />
      <ProviderSection />
      <FallbackChainSection />
      <HooksSection />
    </View>
  )
}
