import { NumberWheelInput, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberWheelInput } from '@neko-os/ui'

<NumberWheelInput value={value} onChange={setValue} />
<NumberWheelInput value={value} onChange={setValue} useInt />
`

function Content() {
  const [v1, setV1] = React.useState(25.5)
  const [v2, setV2] = React.useState(10)

  return (
    <View gap="sm" flex center>
      <Text orange strong>Native only — opens a BottomDrawer with NumberWheelPicker</Text>
      <NumberWheelInput placeholder="Float" value={v1} onChange={setV1} />
      <NumberWheelInput placeholder="Integer" value={v2} onChange={setV2} useInt />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
