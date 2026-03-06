import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import CustomChildrenSample from './samples/CustomChildrenSample'
import IconSample from './samples/IconSample'
import SpreadSample from './samples/SpreadSample'
import VerticalSample from './samples/VerticalSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>LabelValue</Text>

      <BasicUsageSample />
      <VerticalSample />
      <SpreadSample />
      <CustomChildrenSample />
      <IconSample />
    </View>
  )
}
