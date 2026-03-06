import { Button, Modal, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Modal, Text, View } from '@neko-os/ui'

<Modal title="Teste" open={open} onClose={() => setOpen(false)}>
  <View center minHeight={200}>
    <Text>Content test</Text>
  </View>
</Modal>
`

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <Modal open={open} title="Teste" onClose={() => setOpen(false)}>
        <View center minHeight={200}>
          <Text>Content test</Text>
        </View>
      </Modal>
      <Button label="Open Modal" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
