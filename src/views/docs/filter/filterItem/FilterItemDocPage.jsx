import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import MultipleFiltersSample from './samples/MultipleFiltersSample'
import RenderFunctionSample from './samples/RenderFunctionSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>FilterItem</Text>

      <BasicUsageSample />
      <RenderFunctionSample />
      <MultipleFiltersSample />
    </View>
  )
}
