import { AnimatedView, Button, Loading, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { AnimatedView } from '@neko-os/ui'

<AnimatedView open={open} fade lazy>...</AnimatedView>
<AnimatedView open={open} fade lazy unmountOnClose>...</AnimatedView>
`

function LazyWrapper({ children }) {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  if (!!loading) return <Loading text />

  return children
}

function Item({ label, lazy, unmountOnClose }) {
  const [open, setOpen] = React.useState(false)

  return (
    <View gap={15} flex center>
      <AnimatedView
        bg="blue"
        br="md"
        open={open}
        fullW
        ratio={1}
        center
        lazy={lazy}
        unmountOnClose={unmountOnClose}
        padding="md"
        fade
      >
        <LazyWrapper>
          <Text center>Content: {label}</Text>
        </LazyWrapper>
      </AnimatedView>
      <Button sm label={label} onPress={() => setOpen(!open)} fullW />
    </View>
  )
}

function Content() {
  return (
    <View gap={15} flex center row wrap>
      <Item label="normal" />
      <Item lazy label="lazy" />
      <Item unmountOnClose label="unmountOnClose" />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Lazy / unmountOnClose" code={CODE} content={<Content />} />
}
