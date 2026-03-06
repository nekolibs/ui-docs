import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import DefaultValueSample from './samples/DefaultValueSample'
import ExplicitSample from './samples/ExplicitSample'
import GroupSample from './samples/GroupSample'
import NestedNameSample from './samples/NestedNameSample'
import ValidationsSample from './samples/ValidationsSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>FormItem</Text>

      <BasicUsageSample />
      <ValidationsSample />
      <NestedNameSample />
      <GroupSample />
      <ExplicitSample />
      <DefaultValueSample />
    </View>
  )
}
