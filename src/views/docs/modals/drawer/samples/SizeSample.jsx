import { Drawer, Button, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Drawer } from '@neko-os/ui'

<Drawer position="top" fullW height={300}>
<Drawer position="bottom" fullW>
<Drawer position="bottom" width="90%">
<Drawer position="right" width={900}>
`

function Item({ label, ...props }) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Drawer open={open} title="Teste" onClose={() => setOpen(false)} {...props}>
        <View center minHeight={200}>
          <Text>Content test</Text>
        </View>
      </Drawer>
      <Button label={label} onPress={() => setOpen(true)} />
    </>
  )
}

function Content() {
  return (
    <View row gap={10} flex center wrap>
      <Item label="Top fullWidth and small height" position="top" fullW height={300} />
      <Item label="Bottom fullWidth" position="bottom" fullW />
      <Item label="Bottom 90% width" position="bottom" width="90%" />
      <Item label="Right 900 width" position="right" width={900} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Size" code={CODE} content={<Content />} />
}
