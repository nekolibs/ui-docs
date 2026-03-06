import { Text, View } from '@neko-os/ui'

import BackgroundSection from './sections/BackgroundSection'
import BorderSection from './sections/BorderSection'
import ShadowSection from './sections/ShadowSection'
import PositionSection from './sections/PositionSection'
import OverflowSection from './sections/OverflowSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Styling Modifiers</Text>

      <BackgroundSection />
      <BorderSection />
      <ShadowSection />
      <PositionSection />
      <OverflowSection />
    </View>
  )
}
