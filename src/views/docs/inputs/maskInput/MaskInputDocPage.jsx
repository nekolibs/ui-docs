import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import FormSample from './samples/FormSample'
import RawValueSample from './samples/RawValueSample'
import StateSample from './samples/StateSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>MaskInput</Text>

      <BasicUsageSample />
      <RawValueSample />
      <FormSample />
      <StateSample />
    </View>
  )
}
