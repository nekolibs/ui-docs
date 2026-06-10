import { Text, View, WheelPicker } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { WheelPicker } from '@neko-os/ui'

<WheelPicker range={[0, 100]} value={value} onChange={setValue} />
<WheelPicker range={[0, 50]} step={5} value={value} onChange={setValue} />
`

function Content() {
  const [v1, setV1] = React.useState(50)
  const [v2, setV2] = React.useState(25)

  return (
    <View gap="sm" flex center>
      <Text orange strong>Native only</Text>
      <View row gap="lg">
        <WheelPicker range={[0, 100]} value={v1} onChange={setV1} />
        <WheelPicker range={[0, 50]} step={5} value={v2} onChange={setV2} />
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Range & Step" code={CODE} content={<Content />} />
}
