import { Carousel, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Carousel, Text, View } from '@neko-os/ui'

const items = [
  { key: 'slide1', render: () => (
    <View center flex bg="primary_op10" br="lg" padding="xxl">
      <Text h3>Slide 1</Text>
      <Text text3>Short content</Text>
    </View>
  )},
  { key: 'slide2', render: () => (
    <View center flex bg="blue_op10" br="lg" padding="xxl">
      <Text h3>Slide 2</Text>
      <Text text3>This slide has more content</Text>
      <Text text3>to demonstrate that all slides</Text>
      <Text text3>stretch to match the tallest one</Text>
      <Text text3>when using flex</Text>
    </View>
  )},
  { key: 'slide3', render: () => (
    <View center flex bg="green_op10" br="lg" padding="xxl">
      <Text h3>Slide 3</Text>
    </View>
  )},
]

<Carousel items={items} />
`

const items = [
  {
    key: 'slide1',
    render: () => (
      <View center flex bg="primary_op10" br="lg" padding="xxl" minH={250}>
        <Text h3>Slide 1</Text>
        <Text text3>Short content</Text>
      </View>
    ),
  },
  {
    key: 'slide2',
    render: () => (
      <View center flex bg="blue_op10" br="lg" padding="xxl">
        <Text h3>Slide 2</Text>
        <Text text3>This slide has more content</Text>
        <Text text3>to demonstrate that all slides</Text>
        <Text text3>stretch to match the tallest one</Text>
        <Text text3>when using flex</Text>
      </View>
    ),
  },
  {
    key: 'slide3',
    render: () => (
      <View center flex bg="green_op10" br="lg" padding="xxl">
        <Text h3>Slide 3</Text>
      </View>
    ),
  },
]

const CONTENT = (
  <View fullW flex>
    <Carousel items={items} showDots showArrows loop draggable />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
