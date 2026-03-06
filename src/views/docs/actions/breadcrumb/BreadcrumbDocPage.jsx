import { Text, View } from '@neko-os/ui'

import ActionsSample from './samples/ActionsSample'
import BasicUsageSample from './samples/BasicUsageSample'
import IconsSample from './samples/IconsSample'
import SizesSample from './samples/SizesSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Breadcrumbs</Text>

      <BasicUsageSample />
      <IconsSample />
      <ActionsSample />
      <SizesSample />
    </View>
  )
}
