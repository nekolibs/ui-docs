import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ErrorSample from './samples/ErrorSample'
import InfoSample from './samples/InfoSample'
import SuccessSample from './samples/SuccessSample'
import WarningSample from './samples/WarningSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>ResultBar</Text>

      <BasicUsageSample />
      <SuccessSample />
      <ErrorSample />
      <WarningSample />
      <InfoSample />
    </View>
  )
}
