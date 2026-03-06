import { BottomDrawer, Button, DrawerScrollView, Text, View } from '@neko-os/ui'
import { range } from 'ramda'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { BottomDrawer, DrawerScrollView, Text, View } from '@neko-os/ui'

<BottomDrawer open={open} onClose={() => setOpen(false)} snapPoints={[400, '90%']}>
  <DrawerScrollView>
    {range(0, 50).map((i) => (
      <Text key={i} padding="sm" center>Line {i}</Text>
    ))}
  </DrawerScrollView>
</BottomDrawer>
`

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <BottomDrawer open={open} onClose={() => setOpen(false)} snapPoints={[400, '90%']} useSafeArea={false}>
        <DrawerScrollView>
          {range(0, 50).map((i) => (
            <Text key={i} padding="sm" center>
              Line {i}
            </Text>
          ))}
        </DrawerScrollView>
      </BottomDrawer>

      <Button label="Open DrawerScrollView" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="DrawerScrollView (native only)" code={CODE} content={<Content />} />
}
