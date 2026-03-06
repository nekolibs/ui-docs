import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import CustomContentSample from './samples/CustomContentSample'
import InlineSample from './samples/InlineSample'
import SizesSample from './samples/SizesSample'
import StateSample from './samples/StateSample'
import StyleSample from './samples/StyleSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Link</Text>

      <BasicUsageSample />
      <CustomContentSample />
      <InlineSample />
      <ColorsSample />
      <StyleSample />
      <SizesSample />
      <StateSample />
    </View>
  )
}
