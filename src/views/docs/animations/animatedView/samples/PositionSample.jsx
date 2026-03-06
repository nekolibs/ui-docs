import { AnimatedView, Button, Portal, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { AnimatedView, Text } from '@neko-os/ui'

<AnimatedView open={open} fixed top={30} right={30} fade slide={{ from: 'right' }}>
  <Text>Content</Text>
</AnimatedView>
`

function Content() {
  const [open, setOpen] = React.useState(false)

  return (
    <View gap={15} flex center>
      <Portal>
        <AnimatedView
          open={open}
          fixed
          top={30}
          right={30}
          onClose={() => setOpen(false)}
          fade
          slide={{ from: 'right' }}
        >
          <View bg="red" br="md" width={300} padding="md" center>
            <Text>Content</Text>
          </View>
        </AnimatedView>
      </Portal>

      <Button sm label="Toggle" onPress={() => setOpen(!open)} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Fixed position" code={CODE} content={<Content />} />
}
