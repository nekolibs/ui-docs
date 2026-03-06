import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import DisabledSample from './samples/DisabledSample'
import LoadingSample from './samples/LoadingSample'
import ManualChangeValueSample from './samples/ManualChangeValueSample'
import StandAloneWatchSample from './samples/StandaloneWatchSample'
import WatchInsideFormSample from './samples/WatchInsideFormSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Form</Text>

      <BasicUsageSample />
      <StandAloneWatchSample />
      <WatchInsideFormSample />
      <ManualChangeValueSample />
      <DisabledSample />
      <LoadingSample />
    </View>
  )
}
