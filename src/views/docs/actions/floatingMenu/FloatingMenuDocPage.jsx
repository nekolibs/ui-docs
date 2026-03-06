import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import BlurWrapperSample from './samples/BlurWrapperSample'
import SizeSample from './samples/SizeSample'
import WithoutLabelsSample from './samples/WithoutLabelsSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>FloatingMenu</Text>
        <Text text3 maxWidth={800}>
          A floating bottom navigation menu that handles safe area insets automatically. Icons automatically switch from
          line to fill variants when active.
        </Text>
      </View>

      <BasicUsageSample />
      <WithoutLabelsSample />
      <SizeSample />
      <BlurWrapperSample />
    </View>
  )
}
