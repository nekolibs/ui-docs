import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>BlurView</Text>
        <Text text3 maxWidth={800}>
          Requires to install expo-blur on the mobile.
        </Text>
      </View>

      <BasicUsageSample />
    </View>
  )
}
