import { BottomDrawer, Button, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { BottomDrawer, Button, View } from '@neko-os/ui'

// Dont pass onClose to the drawer
<BottomDrawer open={open} snapPoints={[600]} >
  <View paddingH="md">
    <Button label="Close" onPress={() => setOpen(false)} />
  </View>
</BottomDrawer>
`

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <BottomDrawer open={open} snapPoints={[400]}>
        <View center flex minHeight={200}>
          <Text>Content test</Text>
        </View>

        <Button label="Close" onPress={() => setOpen(false)} />
      </BottomDrawer>

      <Button label="Open Drawer" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Disable Gesture Close" code={CODE} content={<Content />} />
}
