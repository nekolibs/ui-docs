import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import CustomizationsSample from './samples/CustomizationsSample'
import TimeSample from './samples/TimeSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Notifications</Text>

      <BasicUsageSample />
      <CustomizationsSample />
      <TimeSample />
    </View>
  )
}
