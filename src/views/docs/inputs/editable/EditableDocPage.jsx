import { Text, View } from '@neko-os/ui'

import AlwaysEditingSample from './samples/AlwaysEditingSample'
import BasicUsageSample from './samples/BasicUsageSample'
import CustomInputSample from './samples/CustomInputSample'
import EmptyStateSample from './samples/EmptyStateSample'
import StateSample from './samples/StateSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Editable</Text>

      <BasicUsageSample />
      <EmptyStateSample />
      <CustomInputSample />
      <AlwaysEditingSample />
      <StateSample />
    </View>
  )
}
