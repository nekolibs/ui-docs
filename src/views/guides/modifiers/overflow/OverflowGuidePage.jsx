import { Text, View } from '@neko-os/ui'

import OverflowSection from './sections/OverflowSection'

export default function Page() {
  return (
    <View flex gap={45}>
      <Text h1>Overflow Modifier</Text>

      <OverflowSection />
    </View>
  )
}
