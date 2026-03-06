import { Text, View } from '@neko-os/ui'

import PaddingSection from './sections/PaddingSection'
import MarginSection from './sections/MarginSection'
import GapSection from './sections/GapSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Spacing Modifiers</Text>

      <PaddingSection />
      <MarginSection />
      <GapSection />
    </View>
  )
}
