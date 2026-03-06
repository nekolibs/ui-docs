import { Drawer, Button, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Drawer } from '@neko-os/ui'

<Drawer position="top">
<Drawer position="bottom">
<Drawer position="left">
<Drawer position="right">
`

function Item({ position }) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Drawer open={open} title="Teste" onClose={() => setOpen(false)} position={position}>
        <View center minHeight={200}>
          <Text>Content test</Text>
        </View>
      </Drawer>
      <Button label={position} onPress={() => setOpen(true)} />
    </>
  )
}

function Content() {
  return (
    <View row gap={10} flex center>
      <Item position="top" />
      <Item position="left" />
      <Item position="right" />
      <Item position="bottom" />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Position" code={CODE} content={<Content />} />
}
