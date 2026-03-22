import { Text, View } from '@neko-os/ui'

import PositionSection from './sections/PositionSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Position Modifier</Text>

      <PositionSection />
    </View>
  )
}
