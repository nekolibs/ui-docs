import { ActionsDrawer, Button, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ActionsDrawer, Button } from '@neko-os/ui'

const items = [
  { label: 'Edit', key: 'edit' },
  { label: 'Duplicate', key: 'duplicate' },
  { label: 'Archive', key: 'archive' },
  { label: 'Delete', key: 'delete' },
]

<ActionsDrawer
  open={open}
  onClose={() => setOpen(false)}
  items={items}
  onChange={(item) => console.log(item.key)}
/>

<Button label="Open Actions" onPress={() => setOpen(true)} />
`

const ITEMS = [
  { label: 'Edit', key: 'edit' },
  { label: 'Duplicate', key: 'duplicate' },
  { label: 'Archive', key: 'archive' },
  { label: 'Delete', key: 'delete' },
]

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <ActionsDrawer
        open={open}
        onClose={() => setOpen(false)}
        items={ITEMS}
        onChange={(item) => console.log(item.key)}
      />

      <Button label="Open Actions" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
