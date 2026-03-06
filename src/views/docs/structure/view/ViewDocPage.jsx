import { Text, View } from '@neko-os/ui'

import AlignmentSample from './samples/AlignmentSample'
import BackgroundSample from './samples/BackgroundSample'
import BasicUsageSample from './samples/BasicUsageSample'
import BorderRadiusSample from './samples/BorderRadiusSample'
import BorderSample from './samples/BorderSample'
import MarginSample from './samples/MarginSample'
import PaddingSample from './samples/PaddingSample'
import RowSample from './samples/RowSample'
import SizeSample from './samples/SizeSample'
import WrapSample from './samples/WrapSample'

export default function ViewDocPage() {
  return (
    <View flex gap={45}>
      <Text h1>View</Text>

      <BasicUsageSample />
      <BackgroundSample />

      <AlignmentSample />
      <RowSample />
      <WrapSample />

      <PaddingSample />
      <MarginSample />
      <BorderRadiusSample />
      <BorderSample />
      <SizeSample />
    </View>
  )
}
