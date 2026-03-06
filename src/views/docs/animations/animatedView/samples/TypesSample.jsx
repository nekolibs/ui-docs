import { AnimatedView, Button, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { AnimatedView } from '@neko-os/ui'

<AnimatedView open={open} fade>...</AnimatedView>
<AnimatedView open={open} slide>...</AnimatedView>
<AnimatedView open={open} scale>...</AnimatedView>
<AnimatedView open={open} fade slide={{ distance: 300, from: 'bottom' }}>...</AnimatedView>
<AnimatedView open={open} fade scale>...</AnimatedView>
`

function Item({ label, ...props }) {
  const [open, setOpen] = React.useState(false)

  return (
    <View gap={15} center width={250}>
      <AnimatedView bg="blue" br="md" open={open} fullW ratio={1} center {...props} padding="md">
        <Text center>Content: {label}</Text>
      </AnimatedView>
      <Button sm label={label} onPress={() => setOpen(!open)} fullW />
    </View>
  )
}

function Content() {
  return (
    <View gap={15} flex center row wrap>
      <Item label="Fade" fade />
      <Item label="Slide" slide />
      <Item label="Scale" scale />
      <Item label="Fade+slide" fade slide={{ distance: 300, from: 'bottom' }} />
      <Item label="Fade+Scale" fade scale />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Effect Types" code={CODE} content={<Content />} />
}
