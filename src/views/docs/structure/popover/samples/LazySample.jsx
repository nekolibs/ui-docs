import { Link, Loading, Popover, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Link, Popover, Text } from '@neko-os/ui'

<Popover content={<Text>Popover content</Text>}>
  <Link label="Lazy load" />
</Popover>

<Popover content={<Text>Popover content</Text>} unmountOnClose>
  <Link label="Unmount on close" />
</Popover>
`

function PopoverContent() {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  if (!!loading) return <Loading />

  return <Text>Popover content</Text>
}

function Content() {
  const [firstCount, setFirstCount] = React.useState(0)
  const [secondCount, setSecondCount] = React.useState(0)

  return (
    <View center fullH row gap="lg">
      <Popover content={<PopoverContent />} placement="bottomLeft">
        <Link label={`Lazy load`} />
      </Popover>

      <Popover content={<PopoverContent />} unmountOnClose placement="bottomLeft">
        <Link label={`Unmount on close`} />
      </Popover>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Lazy" code={CODE} content={<Content />} />
}
