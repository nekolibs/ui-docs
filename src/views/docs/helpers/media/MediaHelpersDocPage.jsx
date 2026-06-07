import { Text, View } from '@neko-os/ui'

import CompressSection from './sections/CompressSection'
import PickSection from './sections/PickSection'
import PersistSection from './sections/PersistSection'

export default function DocPage() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Media Helpers</Text>

      <PickSection />
      <CompressSection />
      <PersistSection />
    </View>
  )
}
