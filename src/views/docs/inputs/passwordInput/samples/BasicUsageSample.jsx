import { PasswordInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { PasswordInput } from '@neko-os/ui'

<PasswordInput value={value} onChange={onChange} />
`

function Content() {
  const [value, setValue] = React.useState('')

  return (
    <View gap={10} flex centerV>
      <PasswordInput placeholder="Password" value={value} onChange={setValue} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
