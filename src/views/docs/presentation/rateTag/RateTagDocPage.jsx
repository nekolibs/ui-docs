import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import IconsSample from './samples/IconsSample'
import SizesSample from './samples/SizesSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>RateTag</Text>

      <BasicUsageSample />
      <IconsSample />
      <ColorsSample />
      <SizesSample />
    </View>
  )
}
