import { NumberWheelInput, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberWheelInput } from '@neko-os/ui'

<NumberWheelInput min={0} max={10} useInt placeholder="0–10" />
<NumberWheelInput min={0} max={200} step={10} useInt placeholder="Step 10" />
`

function Content() {
  const [v1, setV1] = React.useState(5)
  const [v2, setV2] = React.useState(50)

  return (
    <View gap="sm" flex center>
      <Text orange strong>Native only</Text>
      <NumberWheelInput min={0} max={10} useInt placeholder="0–10" value={v1} onChange={setV1} />
      <NumberWheelInput min={0} max={200} step={10} useInt placeholder="Step 10" value={v2} onChange={setV2} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Min/Max & Step" code={CODE} content={<Content />} />
}
