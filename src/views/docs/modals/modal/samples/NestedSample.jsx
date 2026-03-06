import { Button, Modal, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Modal, Button, Text } from '@neko-os/ui'

const [open1, setOpen1] = React.useState(false)
const [open2, setOpen2] = React.useState(false)
const [open3, setOpen3] = React.useState(false)

<Modal open={open1} onClose={() => setOpen1(false)} title="First Modal">
  <Button label="Open second" onPress={() => setOpen2(true)} />
</Modal>

// On mobile only works when the nested modal is inside the current one
<Modal open={open2} onClose={() => setOpen2(false)} title="Second Modal">
  <Button label="Open third" onPress={() => setOpen3(true)} />

  <Modal open={open3} onClose={() => setOpen3(false)} title="Third Modal">
    <Text>Content test 3</Text>
  </Modal>
</Modal>

`

function Content() {
  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const [open3, setOpen3] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <Modal open={open1} onClose={() => setOpen1(false)} title="First Modal">
        <Button label="Open second" onPress={() => setOpen2(true)} />
      </Modal>

      <Modal open={open2} onClose={() => setOpen2(false)} title="Second Modal">
        <Button label="Open third" onPress={() => setOpen3(true)} />

        <Modal open={open3} onClose={() => setOpen3(false)} title="Third Modal">
          <Text>Content test 3</Text>
        </Modal>
      </Modal>

      <Button label="Open first" onPress={() => setOpen1(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Nested" code={CODE} content={<Content />} />
}
