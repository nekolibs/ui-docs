import { NumberInput, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberInput } from '@neko-os/ui'

<NumberInput placeholder="Max 10" max={10} />
<NumberInput placeholder="Min 10" min={10} />
`

function Content() {
  return (
    <View gap={10} flex centerV>
      <NumberInput placeholder="Max 10" max={10} />
      <NumberInput placeholder="Min 10" min={10} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Min/Max" code={CODE} content={<Content />} />
}
