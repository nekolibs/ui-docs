import { ActionsDrawer, Button, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ActionsDrawer, Button } from '@neko-os/ui'

const items = [
  { label: 'Edit', key: 'edit', icon: 'edit-line', onPress: () => console.log('Edit pressed') },
  { label: 'Duplicate', key: 'duplicate', icon: 'file-copy-line', onPress: () => console.log('Duplicate pressed') },
  { label: 'Delete', key: 'delete', icon: 'delete-bin-line', color: 'red', onPress: () => console.log('Delete pressed') },
]

<ActionsDrawer
  open={open}
  onClose={() => setOpen(false)}
  title="Item Actions"
  items={items}
/>
`

function Content() {
  const [open, setOpen] = React.useState(false)

  const items = [
    { label: 'Edit', key: 'edit', icon: 'edit-line', onPress: () => console.log('Edit pressed') },
    { label: 'Duplicate', key: 'duplicate', icon: 'file-copy-line', onPress: () => console.log('Duplicate pressed') },
    { label: 'Delete', key: 'delete', icon: 'delete-bin-line', color: 'red', onPress: () => console.log('Delete pressed') },
  ]

  return (
    <View row gap={10} flex center>
      <ActionsDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Item Actions"
        items={items}
      />

      <Button label="Open With onPress" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Using onPress per item" code={CODE} content={<Content />} />
}
