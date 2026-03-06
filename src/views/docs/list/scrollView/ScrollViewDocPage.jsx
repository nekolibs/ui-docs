import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import HorizontalSample from './samples/HorizontalSample'

export default function InstallDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>ScrollView</Text>

      <BasicUsageSample />
      <HorizontalSample />
    </View>
  )
}
