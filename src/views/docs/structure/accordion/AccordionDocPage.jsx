import { Text, View } from '@neko-os/ui'

import BackgroundSample from './samples/BackgroundSample'
import BasicUsageSample from './samples/BasicUsageSample'
import BorderSample from './samples/BorderSample'
import GroupSample from './samples/GroupSample'
import SizeSample from './samples/SizeSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Accordion</Text>

      <BasicUsageSample />
      <SizeSample />
      <BorderSample />
      <BackgroundSample />
      <GroupSample />
    </View>
  )
}
