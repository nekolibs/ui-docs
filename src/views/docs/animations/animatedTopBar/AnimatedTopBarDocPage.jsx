import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import SlideSample from './samples/SlideSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>AnimatedTopBar</Text>
        <Text text3 maxWidth={800}>
          An animated TopBar that appears based on scroll position. Must be used inside a ReanimatedScrollHandler
          context. <Text red>Currently only works on mobile (React Native).</Text>
        </Text>
      </View>

      <BasicUsageSample />
      <SlideSample />
    </View>
  )
}
