import { Carousel, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Carousel } from '@neko-os/ui'

<Carousel items={items} showDots autoplay autoplaySpeed={2000} loop />
`

const items = [
  {
    key: 'slide1',
    render: () => (
      <View center padding="xxl" bg="purple_op10" br="lg" minH={250}>
        <Text h3>Auto Slide 1</Text>
      </View>
    ),
  },
  {
    key: 'slide2',
    render: () => (
      <View center padding="xxl" bg="orange_op10" br="lg" minH={250}>
        <Text h3>Auto Slide 2</Text>
      </View>
    ),
  },
  {
    key: 'slide3',
    render: () => (
      <View center padding="xxl" bg="cyan_op10" br="lg" minH={250}>
        <Text h3>Auto Slide 3</Text>
      </View>
    ),
  },
  {
    key: 'slide4',
    render: () => (
      <View center padding="xxl" bg="red_op10" br="lg" minH={250}>
        <Text h3>Auto Slide 4</Text>
      </View>
    ),
  },
]

const CONTENT = (
  <View fullW flex>
    <Carousel items={items} showDots autoplay autoplaySpeed={2000} loop />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Autoplay" code={CODE} content={CONTENT} />
}
