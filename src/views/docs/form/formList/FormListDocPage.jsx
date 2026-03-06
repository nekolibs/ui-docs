import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import GroupSample from './samples/GroupSample'
import ValidationsSample from './samples/ValidationsSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>FormList</Text>

      <BasicUsageSample />
      <GroupSample />
      <ValidationsSample />
    </View>
  )
}
