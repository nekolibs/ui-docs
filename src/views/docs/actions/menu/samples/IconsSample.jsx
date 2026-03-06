import { Menu, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Menu } from '@neko-os/ui'

const items = [
  { label: 'Home', icon: 'home-3-line' },
  { label: 'Features', icon: 'list-check-3' },
  { label: 'About', icon: 'id-card-line' },
]

<Menu items={items} activeIndex={0} />
`

const items = [
  { label: 'Home', icon: 'home-3-line' },
  { label: 'Features', icon: 'list-check-3' },
  { label: 'About', icon: 'id-card-line' },
]

function Content() {
  const [index, setIndex] = React.useState(0)

  return (
    <View row gap={15} flex center>
      <Menu items={items} onChangeIndex={setIndex} activeIndex={index} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="With icons" code={CODE} content={<Content />} />
}
