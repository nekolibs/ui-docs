import { Text, View } from '@neko-os/ui'

import AllowClearSample from './samples/AllowClearSample'
import BasicUsageSample from './samples/BasicUsageSample'
import PresentationSample from './samples/PresentationSample'
import FormSample from './samples/FormSample'
import MinMaxSample from './samples/MinMaxSample'
import OnCheckDisabledSample from './samples/OnCheckDisabledSample'
import SizesSample from './samples/SizesSample'
import StateSample from './samples/StateSample'
import TypesSample from './samples/TypesSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>DateInput</Text>

      <BasicUsageSample />
      <TypesSample />
      <PresentationSample />
      <MinMaxSample />
      <OnCheckDisabledSample />
      <AllowClearSample />
      <SizesSample />
      <FormSample />
      <StateSample />
    </View>
  )
}
