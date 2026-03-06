import { AnimatedView, Button, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { AnimatedView, Text } from '@neko-os/ui'

<AnimatedView bg="green" br="md" open={open} width={300} ratio={1} center fade slide={{ distance: 300, from: 'right' }}>
  <Text>Content</Text>
</AnimatedView>
`

function Content() {
  const [open, setOpen] = React.useState(true)

  return (
    <View gap={15} flex center>
      <AnimatedView
        bg="green"
        br="md"
        open={open}
        width={300}
        ratio={1}
        center
        slide={{ distance: 300, from: 'right' }}
        fade
      >
        <Text>Content</Text>
      </AnimatedView>
      <Button sm label="Toggle" onPress={() => setOpen(!open)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
