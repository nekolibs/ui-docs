import { AvatarLabel, Button, Drawer, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Drawer, Text } from '@neko-os/ui'

// No Header
<Drawer open={open} onClose={() => setOpen(false)}>...</Drawer>

// Custom Header
<Drawer open={open} onClose={() => setOpen(false)} header={<AvatarLabel name="Chris Storch" />}>...</Drawer>
`

function Content() {
  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <Drawer open={open1} onClose={() => setOpen1(false)}>
        <View center minHeight={200}>
          <Text>Content test 1</Text>
        </View>
      </Drawer>

      <Drawer open={open2} onClose={() => setOpen2(false)} header={<AvatarLabel name="Chris Storch" />}>
        <View center minHeight={200}>
          <Text>Content test 2</Text>
        </View>
      </Drawer>

      <Button label="Open no Header Drawer" onPress={() => setOpen1(true)} />
      <Button label="Open custom Drawer" onPress={() => setOpen2(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Custom Header" code={CODE} content={<Content />} />
}
