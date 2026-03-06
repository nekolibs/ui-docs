import { NumberInput, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberInput } from '@neko-os/ui'

<NumberInput placeholder="Float" precision={2} />
`

function Content() {
  return (
    <View gap={10} flex centerV>
      <NumberInput placeholder="Float" precision={2} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Precision" code={CODE} content={<Content />} />
}
