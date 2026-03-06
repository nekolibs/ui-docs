import { Button, Modal, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Modal, Text } from '@neko-os/ui'

<Modal title="Teste" open={open} onClose={() => setOpen(false)} disableOutsideClick>
  <Text>Content test</Text>
</Modal>
`

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <Modal open={open} title="Teste" onClose={() => setOpen(false)} disableOutsideClick>
        <Text>Content test</Text>
      </Modal>
      <Button label="Open Modal" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="disableOutsideClick" code={CODE} content={<Content />} />
}
