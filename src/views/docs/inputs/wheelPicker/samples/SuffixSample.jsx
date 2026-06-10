import { Text, View, WheelPicker } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { WheelPicker } from '@neko-os/ui'

<WheelPicker range={[0, 100]} suffix="kg" value={value} onChange={setValue} />
`

function Content() {
  const [value, setValue] = React.useState(70)

  return (
    <View gap="sm" flex center>
      <Text orange strong>Native only</Text>
      <WheelPicker range={[0, 100]} suffix="kg" value={value} onChange={setValue} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Suffix" code={CODE} content={<Content />} />
}
