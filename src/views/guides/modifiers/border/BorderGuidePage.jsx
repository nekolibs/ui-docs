import { Text, View } from '@neko-os/ui'

import BorderSection from './sections/BorderSection'
import OverlayDividerSection from './sections/OverlayDividerSection'
import BaseBorderWidthSection from './sections/BaseBorderWidthSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Border Modifier</Text>

      <BorderSection />
      <OverlayDividerSection />
      <BaseBorderWidthSection />
    </View>
  )
}
