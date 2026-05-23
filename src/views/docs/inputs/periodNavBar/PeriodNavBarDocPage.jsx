import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import MonthSample from './samples/MonthSample'
import QuarterSample from './samples/QuarterSample'
import WeekSample from './samples/WeekSample'
import YearSample from './samples/YearSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>PeriodNavBar</Text>

      <BasicUsageSample />
      <WeekSample />
      <MonthSample />
      <QuarterSample />
      <YearSample />
    </View>
  )
}
