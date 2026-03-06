import { Text, View } from '@neko-os/ui'

import ColorsSection from './sections/ColorsSection'
import ColorVariantsSection from './sections/ColorVariantsSection'
import CustomizeColorsSection from './sections/CustomizeColorsSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Colors</Text>

      <ColorsSection />
      <ColorVariantsSection />
      <CustomizeColorsSection />
    </View>
  )
}
