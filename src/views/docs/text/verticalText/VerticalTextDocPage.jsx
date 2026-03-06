import { Text, View } from '@neko-os/ui'

import AutoSizeSample from './samples/AutoSizeSample'
import BasicUsageSample from './samples/BasicUsageSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>VerticalText</Text>

      <BasicUsageSample />
      <AutoSizeSample />
    </View>
  )
}
