import { Text, View } from '@neko-os/ui'

import DirectionSection from './sections/DirectionSection'
import AlignmentSection from './sections/AlignmentSection'
import FlexSection from './sections/FlexSection'
import WrapSection from './sections/WrapSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Layout Modifiers</Text>

      <DirectionSection />
      <AlignmentSection />
      <FlexSection />
      <WrapSection />
    </View>
  )
}
