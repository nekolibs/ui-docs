import { BottomDrawer, Button, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { BottomDrawer, Button, View } from '@neko-os/ui'

<BottomDrawer open={open} onClose={() => setOpen(false)} snapPoints={[600, '90%']}>
  <View center flex minHeight={200}>
    <Button label="Open second" onPress={() => setOpen2(true)} />
  </View>

  <BottomDrawer open={open2} onClose={() => setOpen2(false)} snapPoints={[300]}>
    ...
  </BottomDrawer>
</BottomDrawer>
`

function Content() {
  const [open, setOpen] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <BottomDrawer open={open} onClose={() => setOpen(false)} snapPoints={[600, '90%']}>
        <View center flex minHeight={200}>
          <View flex center>
            <Text center>Content test</Text>
          </View>
          <Button label="Open second" onPress={() => setOpen2(true)} />
        </View>

        <BottomDrawer open={open2} onClose={() => setOpen2(false)} snapPoints={[300]}>
          <View center flex minHeight={200}>
            <View flex center>
              <Text center>Content test</Text>
            </View>
          </View>
        </BottomDrawer>
      </BottomDrawer>

      <Button label="Open Drawer" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Nested" code={CODE} content={<Content />} />
}
