import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ExtensiveSample from './samples/ExtensiveSample'
import SizesSample from './samples/SizesSample'
import TotalSample from './samples/TotalSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Pagination</Text>

      <BasicUsageSample />
      <TotalSample />
      <ExtensiveSample />
      <SizesSample />
    </View>
  )
}
