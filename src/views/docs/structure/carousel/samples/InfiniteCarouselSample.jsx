import { InfiniteCarousel, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { InfiniteCarousel } from '@neko-os/ui'

const [value, setValue] = React.useState(0)

<InfiniteCarousel
  value={value}
  onChange={setValue}
  renderSlide={(v) => (
    <View center padding="xxl" bg="primary_op10" flex>
      <Text h3>Slide {v}</Text>
    </View>
  )}
  br="md"
  hiddenOverflow
  showDots
  floatingDots
/>
`

function Content() {
  const [value, setValue] = React.useState(0)

  return (
    <View fullW flex gap="sm">
      <InfiniteCarousel
        value={value}
        onChange={setValue}
        renderSlide={(v) => (
          <View center padding="xxl" bg="primary_op10" flex minH={250}>
            <Text h3>Slide {v}</Text>
          </View>
        )}
        br="md"
        hiddenOverflow
        showArrows
      />
      <Text sm text3 center>
        Current value: {value}
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Infinite Carousel" code={CODE} content={<Content />} />
}
