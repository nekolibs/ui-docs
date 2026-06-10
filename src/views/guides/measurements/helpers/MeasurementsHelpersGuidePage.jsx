import { Text, View } from '@neko-os/ui'

import LengthSection from './sections/LengthSection'
import WeightSection from './sections/WeightSection'
import NumbersSection from './sections/NumbersSection'

export default function Page() {
  return (
    <View flex gap={45}>
      <Text h1>Conversion Helpers</Text>

      <LengthSection />
      <WeightSection />
      <NumbersSection />
    </View>
  )
}
