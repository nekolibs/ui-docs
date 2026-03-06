import { Text, View } from '@neko-os/ui'

import DimensionsSection from './sections/DimensionsSection'
import FullSizeSection from './sections/FullSizeSection'
import RatioSection from './sections/RatioSection'
import SpanSection from './sections/SpanSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Size Modifiers</Text>

      <DimensionsSection />
      <FullSizeSection />
      <RatioSection />
      <SpanSection />
    </View>
  )
}
