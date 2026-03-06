import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>VerticalView</Text>

      <BasicUsageSample />
    </View>
  )
}
