import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>GradientView</Text>
        <Text text3 maxWidth={800}>
          Requires to install expo-linear-gradient on the mobile. For the web this is just a normal view, you can just
          use View with the same props. But to work seamlessly between web and native, this component is available on
          both
        </Text>
      </View>

      <BasicUsageSample />
    </View>
  )
}
