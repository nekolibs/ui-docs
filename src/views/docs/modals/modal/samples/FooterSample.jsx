import { Button, Modal, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Modal, Button, View, Text } from '@neko-os/ui'

<Modal
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
</Modal>
`

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <Modal
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
      </Modal>

      <Button label="Open Modal" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Footer" code={CODE} content={<Content />} />
}
