import { Text, View } from '@neko-os/ui'

import BackgroundSection from './sections/BackgroundSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Background Modifier</Text>

      <BackgroundSection />
    </View>
  )
}
