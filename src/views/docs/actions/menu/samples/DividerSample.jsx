import { Menu, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Menu } from '@neko-os/ui'

const items = [
  { label: 'Item 1' }, //
  { label: 'Item 2' },
  { type: 'divider' },
  { label: 'Item 3' },
]

<Menu items={items} activeIndex={0} />
`

const items = [
  { label: 'Item 1' }, //
  { label: 'Item 2' },
  { type: 'divider' },
  { label: 'Item 3' },
]

function Content() {
  const [index, setIndex] = React.useState(0)

  return (
    <View row gap={15} flex>
      <Menu items={items} onChangeIndex={setIndex} activeIndex={index} vertical width={250} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Dividers" code={CODE} content={<Content />} />
}
