import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import BorderSample from './samples/BorderSample'
import ShadowSample from './samples/ShadowSample'
import ShapesSample from './samples/ShapesSample'
import SizesSample from './samples/SizesSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Image</Text>

      <BasicUsageSample />
      <ShapesSample />
      <BorderSample />
      <SizesSample />
      <ShadowSample />
    </View>
  )
}
