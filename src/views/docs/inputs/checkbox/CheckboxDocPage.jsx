import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ColorsSample from './samples/ColorsSample'
import FormSample from './samples/FormSample'
import GroupSample from './samples/GroupSample'
import SizesSample from './samples/SizesSample'
import SpaceSample from './samples/SpaceSample'
import StateSample from './samples/StateSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>Checkbox</Text>

      <BasicUsageSample />
      <ColorsSample />
      <SizesSample />
      <SpaceSample />
      <GroupSample />
      <FormSample />
      <StateSample />
    </View>
  )
}
