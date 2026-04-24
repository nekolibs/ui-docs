import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ClearSample from './samples/ClearSample'
import InitialValuesSample from './samples/InitialValuesSample'
import ResetSample from './samples/ResetSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>FilterHandler</Text>

      <BasicUsageSample />
      <InitialValuesSample />
      <ClearSample />
      <ResetSample />
    </View>
  )
}
