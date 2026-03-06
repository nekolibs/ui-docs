import { Icon, TextInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { TextInput } from '@neko-os/ui'

<TextInput value={value} onChange={onChange} />
`

function Content() {
  const [value, setValue] = React.useState('')

  return (
    <View gap={10} flex centerV>
      <TextInput placeholder="Name" onChange={setValue} value={value} />
      <TextInput prefix={<Icon name="user-line" />} placeholder="Username" />
      <TextInput prefixIcon="user-line" placeholder="Username" />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
