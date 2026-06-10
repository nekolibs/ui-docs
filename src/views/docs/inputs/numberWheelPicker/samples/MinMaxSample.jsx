import { NumberWheelPicker, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberWheelPicker } from '@neko-os/ui'

<NumberWheelPicker min={0} max={10} useInt />
<NumberWheelPicker min={0} max={200} step={10} useInt />
`

function Content() {
  const [v1, setV1] = React.useState(5)
  const [v2, setV2] = React.useState(50)

  return (
    <View gap="sm" flex center>
      <Text orange strong>Native only</Text>
      <NumberWheelPicker min={0} max={10} useInt value={v1} onChange={setV1} />
      <NumberWheelPicker min={0} max={200} step={10} useInt value={v2} onChange={setV2} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Min/Max & Step" code={CODE} content={<Content />} />
}
