import { Text, View } from '@neko-os/ui'

import AsyncOptionsSample from './samples/AsyncOptionsSample'
import BasicUsageSample from './samples/BasicUsageSample'
import CustomKeysSample from './samples/CustomKeysSample'
import DirectionSample from './samples/DirectionSample'
import FormSample from './samples/FormSample'
import GridSample from './samples/GridSample'
import MultipleSample from './samples/MultipleSample'
import RawOptionSample from './samples/RawOptionSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Picker</Text>

      <BasicUsageSample />
      <RawOptionSample />
      <MultipleSample />
      <CustomKeysSample />
      <DirectionSample />
      <GridSample />
      <AsyncOptionsSample />
      <FormSample />
    </View>
  )
}
