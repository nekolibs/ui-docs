import { Carousel, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Carousel } from '@neko-os/ui'

<Carousel items={items} showDots showArrows draggable />
`

const items = [
  {
    key: 'slide1',
    render: () => (
      <View center padding="xxl" bg="navy_op10" br="lg" minH={250}>
        <Text h3>Drag me</Text>
        <Text text3>Swipe left or right</Text>
      </View>
    ),
  },
  {
    key: 'slide2',
    render: () => (
      <View center padding="xxl" bg="indigo_op10" br="lg" minH={250}>
        <Text h3>Keep dragging</Text>
        <Text text3>Release to snap</Text>
      </View>
    ),
  },
  {
    key: 'slide3',
    render: () => (
      <View center padding="xxl" bg="lylac_op10" br="lg" minH={250}>
        <Text h3>Last slide</Text>
        <Text text3>Drag back to go previous</Text>
      </View>
    ),
  },
]

const CONTENT = (
  <View fullW flex>
    <Carousel items={items} showDots showArrows draggable />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Draggable" code={CODE} content={CONTENT} />
}
