import { Button, Drawer, Text, View } from '@neko-os/ui'
import { range } from 'ramda'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Drawer, Text } from '@neko-os/ui'
import { range } from 'ramda'

<Drawer title="Teste" open={open} onClose={() => setOpen(false)}>
  {range(0, 2000).map((i) => (
    <Text key={i}>Line {i}</Text>
  ))}
</Drawer>
`

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View row gap={10} flex center>
      <Drawer open={open} title="Teste" onClose={() => setOpen(false)} footer={<Text center>Footer</Text>}>
        {range(0, 2000).map((i) => (
          <Text key={i}>Line {i}</Text>
        ))}
      </Drawer>
      <Button label="Open Drawer" onPress={() => setOpen(true)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Scroll" code={CODE} content={<Content />} />
}
