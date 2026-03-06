import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import SizesSample from './samples/SizesSample'
import WrapperSample from './samples/WrapperSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Loading</Text>

      <BasicUsageSample />
      <WrapperSample />
      <SizesSample />
      <ColorsSample />
    </View>
  )
}
