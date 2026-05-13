import { Button, Carousel, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Carousel, Button } from '@neko-os/ui'

const [activeIndex, setActiveIndex] = React.useState(0)

<Carousel
  items={items}
  activeIndex={activeIndex}
  onChange={(key, index) => setActiveIndex(index)}
  showDots
/>

<View row center gap="sm" marginT="sm">
  <Button label="Go to 1" sm onPress={() => setActiveIndex(0)} />
  <Button label="Go to 2" sm onPress={() => setActiveIndex(1)} />
  <Button label="Go to 3" sm onPress={() => setActiveIndex(2)} />
</View>
`

const items = [
  {
    key: 'slide1',
    render: () => (
      <View center padding="xxl" bg="green_op10" br="lg" minH={250}>
        <Text h3>Slide 1</Text>
      </View>
    ),
  },
  {
    key: 'slide2',
    render: () => (
      <View center padding="xxl" bg="yellow_op10" br="lg" minH={250}>
        <Text h3>Slide 2</Text>
      </View>
    ),
  },
  {
    key: 'slide3',
    render: () => (
      <View center padding="xxl" bg="red_op10" br="lg" minH={250}>
        <Text h3>Slide 3</Text>
      </View>
    ),
  },
]

function Content() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <View fullW flex gap="sm">
      <Carousel items={items} activeIndex={activeIndex} onChange={(key, index) => setActiveIndex(index)} showDots />
      <View row center gap="sm">
        <Button label="Go to 1" sm onPress={() => setActiveIndex(0)} />
        <Button label="Go to 2" sm onPress={() => setActiveIndex(1)} />
        <Button label="Go to 3" sm onPress={() => setActiveIndex(2)} />
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Controlled" code={CODE} content={<Content />} />
}
