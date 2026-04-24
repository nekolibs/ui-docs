import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import CustomPlaceholderSample from './samples/CustomPlaceholderSample'
import StandaloneSample from './samples/StandaloneSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>SearchInput</Text>

      <BasicUsageSample />
      <StandaloneSample />
      <CustomPlaceholderSample />
    </View>
  )
}
