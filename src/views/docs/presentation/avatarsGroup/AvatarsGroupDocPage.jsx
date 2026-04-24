import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import MaxCountSample from './samples/MaxCountSample'
import SizesSample from './samples/SizesSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>AvatarsGroup</Text>

      <BasicUsageSample />
      <SizesSample />
      <MaxCountSample />
    </View>
  )
}
