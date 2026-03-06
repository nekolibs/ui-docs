import { View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { AnimatedTopBar, Button, FlatList, ReanimatedScrollHandler, useReanimatedScroll, View } from '@neko-os/ui'
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
    />
  )
}

function View() {
  return (
    <ReanimatedScrollHandler>
      <AnimatedTopBar
        title="Page Title"
        left={<Button icon="arrow-left-s-line" ratio={1} mainBG />}
        right={<Button icon="more-2-fill" ratio={1} mainBG />}
        showAfter={90}
      />
      <Content />
    </ReanimatedScrollHandler>
  )
}
`

const CONTENT = <View height={100} fullW center bg="overlayBG" br="lg" />

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
