import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import LazySample from './samples/LazySample'
import PositionSample from './samples/PositionSample'
import TypesSample from './samples/TypesSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>AnimatedView</Text>

      <BasicUsageSample />
      <TypesSample />
      <LazySample />
      <PositionSample />
    </View>
  )
}
