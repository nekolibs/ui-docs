import { ActionsDrawer, Button, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ActionsDrawer, Button } from '@neko-os/ui'

<ActionsDrawer
  open={open}
  onClose={() => setOpen(false)}
  title="File Options"
  subtitle="Choose an action"
  items={items}
  onChange={(item) => console.log(item.key)}
/>
`

const ITEMS = [
  { label: 'Edit', key: 'edit' },
  { label: 'Duplicate', key: 'duplicate' },
  { label: 'Move', key: 'move' },
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
        title="File Options"
        subtitle="Choose an action"
        items={ITEMS}
        onChange={(item) => console.log(item.key)}
      />

      <Button label="Open With Title" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="With Title & Subtitle" code={CODE} content={<Content />} />
}
