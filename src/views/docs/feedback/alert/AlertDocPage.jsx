import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import CustomizationsSample from './samples/CustomizationsSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Alerts</Text>

      <BasicUsageSample />
      <CustomizationsSample />
    </View>
  )
}
