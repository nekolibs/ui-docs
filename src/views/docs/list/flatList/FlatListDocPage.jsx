import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import HorizontalSample from './samples/HorizontalSample'
import LazySample from './samples/LazySample'
import NoScrollSample from './samples/NoScrollSample'

export default function InstallDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>FlatList</Text>

      <BasicUsageSample />
      <HorizontalSample />
      <NoScrollSample />
      <LazySample />
    </View>
  )
}
