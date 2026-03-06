import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import NumberOfLinesSample from './samples/NumberOfLinesSample'
import SizesSample from './samples/SizesSample'
import StyleSample from './samples/StyleSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Text</Text>

      <BasicUsageSample />
      <ColorsSample />
      <StyleSample />
      <SizesSample />
      <NumberOfLinesSample />
    </View>
  )
}
