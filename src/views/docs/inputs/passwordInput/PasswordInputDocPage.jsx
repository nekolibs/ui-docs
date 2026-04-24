import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import FormSample from './samples/FormSample'
import SizesSample from './samples/SizesSample'
import StateSample from './samples/StateSample'
import VisibilityToggleSample from './samples/VisibilityToggleSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>PasswordInput</Text>

      <BasicUsageSample />
      <VisibilityToggleSample />
      <SizesSample />
      <FormSample />
      <StateSample />
    </View>
  )
}
