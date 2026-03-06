import { NumberInput, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberInput } from '@neko-os/ui'

<NumberInput value={value} onChange={onChange} />
<NumberInput value={value} onChange={onChange} useInt />
`

function Content() {
  return (
    <View gap={10} flex centerV>
      <NumberInput placeholder="Float" />
      <NumberInput placeholder="Int" useInt />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
