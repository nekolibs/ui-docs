import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FlatList, ImageBackground, ParallaxHeader, ReanimatedScrollHandler, useReanimatedScroll } from '@neko-os/ui'
import Animated from 'react-native-reanimated'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

function Content() {
  const { scrollHandler } = useReanimatedScroll()

  return (
    <AnimatedFlatList
      data={items}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      renderItem={({ item }) => <ItemCard item={item} />}
      renderHeader={() => (
        <ParallaxHeader height={250}>
          <ImageBackground src="https://example.com/image.jpg" height={250} />
        </ParallaxHeader>
      )}
    />
  )
}

function Screen() {
  return (
    <ReanimatedScrollHandler>
      <Content />
    </ReanimatedScrollHandler>
  )
}
`

const CONTENT = <View height={100} fullW center bg="overlayBG" br="lg" />

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
