import { Drawer, Button, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Drawer, Text, View } from '@neko-os/ui'

<Drawer title="Teste" open={open} onClose={() => setOpen(false)}>
  <View center minHeight={200}>
    <Text>Content test</Text>
  </View>
</Drawer>
`

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <Drawer open={open} title="Teste" onClose={() => setOpen(false)}>
        <View center minHeight={200}>
          <Text>Content test</Text>
        </View>
      </Drawer>
      <Button label="Open Drawer" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
