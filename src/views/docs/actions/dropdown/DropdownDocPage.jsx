import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import BottomDrawerSample from './samples/BottomDrawerSample'
import NestedSample from './samples/NestedSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Dropdown</Text>

      <BasicUsageSample />
      <NestedSample />
      <BottomDrawerSample />
    </View>
  )
}
