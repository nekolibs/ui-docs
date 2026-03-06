import { Button, Drawer, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Drawer, Button, View, Text } from '@neko-os/ui'

<Drawer
  open={open}
  title="Footer"
  onClose={() => setOpen(false)}
  footer={
    <View flex row toRight centerV gap="sm">
      <Button sm label="Cancel" outline onPress={() => setOpen(false)} text4 />
      <Button sm label="Submit" />
    </View>
  }
>
  <View center minHeight={200}>
    <Text>Content test</Text>
  </View>
</Drawer>
`

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <Drawer
        open={open}
        title="Footer"
        onClose={() => setOpen(false)}
        footer={
          <View flex row toRight centerV gap="sm">
            <Button sm label="Cancel" outline onPress={() => setOpen(false)} text4 />
            <Button sm label="Submit" />
          </View>
        }
      >
        <View center minHeight={200}>
          <Text>Content test</Text>
        </View>
      </Drawer>

      <Button label="Open Drawer" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Footer" code={CODE} content={<Content />} />
}
