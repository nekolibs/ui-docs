import { Text, View } from '@neko-os/ui'

import ShadowSection from './sections/ShadowSection'

export default function Page() {
  return (
    <View flex gap={45}>
      <Text h1>Shadow Modifier</Text>

      <ShadowSection />
    </View>
  )
}
