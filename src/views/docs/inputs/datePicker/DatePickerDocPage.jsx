import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import MinMaxSample from './samples/MinMaxSample'
import MonthSample from './samples/MonthSample'
import OnCheckDisabledSample from './samples/OnCheckDisabledSample'
import QuarterSample from './samples/QuarterSample'
import WeekSample from './samples/WeekSample'
import YearSample from './samples/YearSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>DatePicker</Text>

      <BasicUsageSample />
      <WeekSample />
      <MonthSample />
      <QuarterSample />
      <YearSample />
      <MinMaxSample />
      <OnCheckDisabledSample />
    </View>
  )
}
