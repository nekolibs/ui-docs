import { Button, Modal, Text, View } from '@neko-os/ui'
import { range } from 'ramda'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Modal, Text } from '@neko-os/ui'
import { range } from 'ramda'

<Modal title="Teste" open={open} onClose={() => setOpen(false)}>
  {range(0, 2000).map((i) => (
    <Text key={i}>Line {i}</Text>
  ))}
</Modal>
`

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <Modal open={open} title="Teste" onClose={() => setOpen(false)}>
        {range(0, 2000).map((i) => (
          <Text key={i}>Line {i}</Text>
        ))}
      </Modal>
      <Button label="Open Modal" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Scroll" code={CODE} content={<Content />} />
}
