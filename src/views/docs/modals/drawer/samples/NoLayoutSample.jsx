import { Button, Drawer, ModalHeader, ModalFooter, ModalContent, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Drawer, ModalHeader, ModalContent, ModalFooter, Text } from '@neko-os/ui'


<Drawer open={open} onClose={() => setOpen(false)} noLayout>
  <ModalHeader title="Custom Layout" onClose={() => setOpen(false)} />

  <ModalContent>
    <Text>Content test</Text>
  </ModalContent>

  <ModalFooter>
    <Text center>Footer</Text>
  </ModalFooter>
</Drawer>
`

function Content() {
  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <Drawer open={open1} onClose={() => setOpen1(false)} noLayout>
        <Text>Content test 1</Text>
      </Drawer>

      <Drawer open={open2} onClose={() => setOpen2(false)} noLayout>
        <ModalHeader title="Custom Layout" onClose={() => setOpen2(false)} />

        <ModalContent>
          <Text>Content test 2</Text>
        </ModalContent>

        <ModalFooter>
          <Text center>Footer</Text>
        </ModalFooter>
      </Drawer>

      <Button label="Open noLayout" onPress={() => setOpen1(true)} />
      <Button label="Open with custom layout" onPress={() => setOpen2(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Layout" code={CODE} content={<Content />} />
}
