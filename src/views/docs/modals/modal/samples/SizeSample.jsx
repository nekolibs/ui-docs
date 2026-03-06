import { Modal, Button, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Modal } from '@neko-os/ui'

<Modal width={200} height={900}>
`

function Item({ label, ...props }) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Modal open={open} title="Teste" onClose={() => setOpen(false)} {...props}>
        <View center flex>
          <Text>Content test</Text>
        </View>
      </Modal>
      <Button label={label} onPress={() => setOpen(true)} />
    </>
  )
}

function Content() {
  return (
    <View row gap={10} flex center wrap>
      <Item label="900 width" width={900} />
      <Item label="200 height" height={200} />
      <Item label="200 height 900 width" height={200} width={900} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Size" code={CODE} content={<Content />} />
}
