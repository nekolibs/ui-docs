import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import WithTitleSample from './samples/WithTitleSample'
import WithIconsSample from './samples/WithIconsSample'
import OnPressSample from './samples/OnPressSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>ActionsDrawer</Text>
        <Text text3>A bottom drawer that displays a vertical menu with action items. Uses the Menu component internally.</Text>
      </View>

      <BasicUsageSample />
      <WithTitleSample />
      <WithIconsSample />
      <OnPressSample />
    </View>
  )
}
