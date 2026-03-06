import { Button, Drawer, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Drawer, Button, Text } from '@neko-os/ui'

const [open1, setOpen1] = React.useState(false)
const [open2, setOpen2] = React.useState(false)
const [open3, setOpen3] = React.useState(false)

<Drawer open={open1} onClose={() => setOpen1(false)} title="First Drawer">
  <Button label="Open second" onPress={() => setOpen2(true)} />
</Drawer>

// On mobile only works when the nested modal is inside the current one
<Drawer open={open2} onClose={() => setOpen2(false)} title="Second Drawer">
  <Button label="Open third" onPress={() => setOpen3(true)} />

  <Drawer open={open3} onClose={() => setOpen3(false)} title="Third Drawer">
    <Text>Content test 3</Text>
  </Drawer>
</Drawer>

`

function Content() {
  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const [open3, setOpen3] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <Drawer open={open1} onClose={() => setOpen1(false)} title="First Drawer">
        <Button label="Open second" onPress={() => setOpen2(true)} />
      </Drawer>

      <Drawer open={open2} onClose={() => setOpen2(false)} title="Second Drawer">
        <Button label="Open third" onPress={() => setOpen3(true)} />

        <Drawer open={open3} onClose={() => setOpen3(false)} title="Third Drawer">
          <Text>Content test 3</Text>
        </Drawer>
      </Drawer>

      <Button label="Open first" onPress={() => setOpen1(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Nested" code={CODE} content={<Content />} />
}
