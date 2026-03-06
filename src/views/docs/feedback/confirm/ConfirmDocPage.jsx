import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import CustomizationsSample from './samples/CustomizationsSample'
import PromiseSample from './samples/PromiseSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Confirm</Text>

      <BasicUsageSample />
      <CustomizationsSample />
      <PromiseSample />
    </View>
  )
}
