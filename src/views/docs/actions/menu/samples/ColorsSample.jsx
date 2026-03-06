import { Menu, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Menu } from '@neko-os/ui'

const items = [{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]

<Menu items={items} color="text4" activeColor="green" />
`

const items = [{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]

function Content() {
  const [index, setIndex] = React.useState(0)

  return (
    <View gap={15} flex center>
      <Menu items={items} onChangeIndex={setIndex} activeIndex={index} text4 activeColor="green" />

      <View bg="black" paddingH="xxl" br="md">
        <Menu items={items} onChangeIndex={setIndex} activeIndex={index} color="white" />
      </View>

      <View bg="white" paddingH="xxl" br="md">
        <Menu items={items} onChangeIndex={setIndex} activeIndex={index} color="#666" />
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={<Content />} />
}
