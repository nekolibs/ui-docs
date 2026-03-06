import { BottomDrawer, Button, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { BottomDrawer, Text, View } from '@neko-os/ui'

<BottomDrawer open={open} onClose={() => setOpen(false)} snapPoints={[300, 600, '90%']}>
  <View paddingH="md">
    <Text>Content test</Text>
  </View>
</BottomDrawer>
`

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <BottomDrawer
        open={open}
        onClose={() => setOpen(false)}
        snapPoints={[400, 600, '90%']}
        useSafeArea={false}
        title="Drawer Teste"
      >
        <View center>
          <Text>Content test</Text>
        </View>
      </BottomDrawer>

      <Button label="Open Drawer" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
