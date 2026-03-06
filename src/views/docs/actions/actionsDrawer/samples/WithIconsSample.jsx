import { ActionsDrawer, Button, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ActionsDrawer, Button } from '@neko-os/ui'

const items = [
  { label: 'Edit', key: 'edit', icon: 'edit-line' },
  { label: 'Duplicate', key: 'duplicate', icon: 'file-copy-line' },
  { label: 'Share', key: 'share', icon: 'share-line' },
  { label: 'Download', key: 'download', icon: 'download-line' },
  { label: 'Delete', key: 'delete', icon: 'delete-bin-line', color: 'red' },
]

<ActionsDrawer
  open={open}
  onClose={() => setOpen(false)}
  title="Actions"
  items={items}
  onChange={(item) => console.log(item.key)}
/>
`

const ITEMS = [
  { label: 'Edit', key: 'edit', icon: 'edit-line' },
  { label: 'Duplicate', key: 'duplicate', icon: 'file-copy-line' },
  { label: 'Share', key: 'share', icon: 'share-line' },
  { label: 'Download', key: 'download', icon: 'download-line' },
  { label: 'Delete', key: 'delete', icon: 'delete-bin-line', color: 'red' },
]

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <ActionsDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Actions"
        items={ITEMS}
        onChange={(item) => console.log(item.key)}
      />

      <Button label="Open With Icons" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="With Icons" code={CODE} content={<Content />} />
}
