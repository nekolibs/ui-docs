import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ParallaxSpeedSample from './samples/ParallaxSpeedSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>ParallaxHeader</Text>
        <Text text3 maxWidth={800}>
          A parallax header that scales up when pulling down and moves at a different speed when scrolling. Must be used
          inside a ReanimatedScrollHandler context. <Text red>Currently only works on mobile (React Native).</Text>
        </Text>
      </View>

      <BasicUsageSample />
      <ParallaxSpeedSample />
    </View>
  )
}
