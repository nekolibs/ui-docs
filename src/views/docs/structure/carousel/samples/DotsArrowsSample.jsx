import { Carousel, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Carousel } from '@neko-os/ui'

// Dots below the slide (default)
<Carousel items={items} showDots showArrows />

// Floating dots over the slide
<Carousel items={items} showDots showArrows floatingDots />
`

const items = [
  {
    key: 'slide1',
    render: () => (
      <View center padding="xxl" bg="primary_op10" br="lg" minH={250}>
        <Text h3>Slide 1</Text>
        <Text text3>With dots and arrows</Text>
      </View>
    ),
  },
  {
    key: 'slide2',
    render: () => (
      <View center padding="xxl" bg="blue_op10" br="lg" minH={250}>
        <Text h3>Slide 2</Text>
        <Text text3>Navigate with arrows or dots</Text>
      </View>
    ),
  },
  {
    key: 'slide3',
    render: () => (
      <View center padding="xxl" bg="green_op10" br="lg" minH={250}>
        <Text h3>Slide 3</Text>
        <Text text3>Click dots to jump</Text>
      </View>
    ),
  },
]

const CONTENT = (
  <View fullW flex gap="xl">
    <View gap="xs">
      <Text sm text3>
        Dots below (arrows centered to slide)
      </Text>
      <Carousel items={items} showDots showArrows />
    </View>
    <View gap="xs">
      <Text sm text3>
        Floating dots
      </Text>
      <Carousel items={items} showDots showArrows floatingDots />
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Dots & Arrows" code={CODE} content={CONTENT} />
}
