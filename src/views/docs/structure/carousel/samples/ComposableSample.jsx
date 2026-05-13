import { CarouselArrows, CarouselDots, CarouselHandler, CarouselSlider, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { CarouselHandler, CarouselSlider, CarouselArrows, CarouselDots, View } from '@neko-os/ui'

<CarouselHandler items={items} draggable loop>
  <View relative br="lg" hiddenOverflow>
    <CarouselSlider />
    <CarouselArrows />
  </View>
  <CarouselDots marginT="md" />
</CarouselHandler>
`

const items = [
  {
    key: 'slide1',
    render: () => (
      <View center padding="xxl" bg="primary_op10" minH={250}>
        <Text h3>Composable 1</Text>
      </View>
    ),
  },
  {
    key: 'slide2',
    render: () => (
      <View center padding="xxl" bg="blue_op10" minH={250}>
        <Text h3>Composable 2</Text>
      </View>
    ),
  },
  {
    key: 'slide3',
    render: () => (
      <View center padding="xxl" bg="green_op10" minH={250}>
        <Text h3>Composable 3</Text>
      </View>
    ),
  },
]

const CONTENT = (
  <View fullW flex>
    <CarouselHandler items={items} draggable loop>
      <View relative br="lg" hiddenOverflow>
        <CarouselSlider />
        <CarouselArrows />
      </View>
      <CarouselDots marginT="md" />
    </CarouselHandler>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Composable" code={CODE} content={CONTENT} />
}
