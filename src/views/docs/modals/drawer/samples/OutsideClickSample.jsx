import { Button, Drawer, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Drawer, Text } from '@neko-os/ui'

<Drawer title="Teste" open={open} onClose={() => setOpen(false)} disableOutsideClick>
  <Text>Content test</Text>
</Drawer>
`

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <Drawer open={open} title="Teste" onClose={() => setOpen(false)} disableOutsideClick>
        <Text>Content test</Text>
      </Drawer>
      <Button label="Open Drawer" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="disableOutsideClick" code={CODE} content={<Content />} />
}
