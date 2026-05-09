import { BottomDrawer, Button, Text, TextInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { BottomDrawer, TextInput, View } from '@neko-os/ui'

// 'interactive' (default) — shifts drawer up by keyboard height, clamped at safe area
<BottomDrawer open={open} onClose={() => setOpen(false)} keyboardBehavior="interactive">
  <TextInput placeholder="Type here..." />
</BottomDrawer>

// 'extend' — extends drawer to fill all space above keyboard
<BottomDrawer open={open} onClose={() => setOpen(false)} keyboardBehavior="extend">
  <TextInput placeholder="Type here..." />
</BottomDrawer>

// 'none' — no keyboard handling
<BottomDrawer open={open} onClose={() => setOpen(false)} keyboardBehavior="none">
  <TextInput placeholder="Type here..." />
</BottomDrawer>
`

function Content() {
  const [mode, setMode] = React.useState('interactive')
  const [open, setOpen] = React.useState(false)

  return (
    <View gap="md" flex center>
      <BottomDrawer
        open={open}
        onClose={() => setOpen(false)}
        snapPoints={[400]}
        keyboardBehavior={mode}
      >
        <View padding="md" gap="md">
          <Text h4 strong>{mode}</Text>
          <TextInput placeholder="Tap to open keyboard..." />
          <TextInput placeholder="Another input..." />
          <Button label="Close" onPress={() => setOpen(false)} />
        </View>
      </BottomDrawer>

      <View row gap="sm" wrap center>
        {['interactive', 'extend', 'none'].map((m) => (
          <Button
            key={m}
            label={m}
            onPress={() => { setMode(m); setOpen(true) }}
            sm
          />
        ))}
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Keyboard Behavior" code={CODE} content={<Content />} />
}
