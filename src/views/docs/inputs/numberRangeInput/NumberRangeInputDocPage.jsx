import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import CustomPlaceholdersSample from './samples/CustomPlaceholdersSample'
import CustomSeparatorSample from './samples/CustomSeparatorSample'
import SizesSample from './samples/SizesSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>NumberRangeInput</Text>

      <BasicUsageSample />
      <CustomPlaceholdersSample />
      <CustomSeparatorSample />
      <SizesSample />
    </View>
  )
}
