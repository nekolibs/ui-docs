import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import SubmitOnCloseSample from './samples/SubmitOnCloseSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>PopoverFilterItem</Text>

      <BasicUsageSample />
      <SubmitOnCloseSample />
    </View>
  )
}
