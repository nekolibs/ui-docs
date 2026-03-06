import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import LeftRightSample from './samples/LeftRightSample'
import SubtitleSample from './samples/SubtitleSample'
import CustomContentSample from './samples/CustomContentSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>TopBar</Text>
        <Text text3 maxWidth={800}>
          A header bar component that handles safe area insets automatically. Commonly used for navigation headers with
          title, subtitle, and left/right actions.
        </Text>
      </View>

      <BasicUsageSample />
      <SubtitleSample />
      <LeftRightSample />
      <CustomContentSample />
    </View>
  )
}
