import { BottomDrawer, Button, Text, View } from '@neko-os/ui'
import { range } from 'ramda'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Modal, Text } from '@neko-os/ui'

TODO: Mobile only
`

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <BottomDrawer open={open} onClose={() => setOpen(false)} snapPoints={[500, '90%']} useSafeArea={false}>
        <View flex fullW>
          {range(0, 500).map((i) => (
            <Text key={i} center>
              Line {i}
            </Text>
          ))}
        </View>
      </BottomDrawer>

      <Button label="Open Drawer" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Scroll" code={CODE} content={<Content />} />
}
