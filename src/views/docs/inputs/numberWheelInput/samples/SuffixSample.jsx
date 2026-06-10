import { NumberWheelInput, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberWheelInput } from '@neko-os/ui'

<NumberWheelInput min={0} max={200} useInt suffix="kg" placeholder="Weight" />
<NumberWheelInput min={0} max={300} useInt suffix="cm" placeholder="Height" />
`

function Content() {
  const [v1, setV1] = React.useState(70)
  const [v2, setV2] = React.useState(175)

  return (
    <View gap="sm" flex center>
      <Text orange strong>Native only</Text>
      <NumberWheelInput min={0} max={200} useInt suffix="kg" placeholder="Weight" value={v1} onChange={setV1} />
      <NumberWheelInput min={0} max={300} useInt suffix="cm" placeholder="Height" value={v2} onChange={setV2} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Suffix" code={CODE} content={<Content />} />
}
