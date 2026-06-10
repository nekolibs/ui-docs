import { NumberWheelPicker, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { NumberWheelPicker } from '@neko-os/ui'

<NumberWheelPicker precision={1} />
<NumberWheelPicker precision={2} />
<NumberWheelPicker precision={2} decimalStep={5} />
`

function Content() {
  const [v1, setV1] = React.useState(5.5)
  const [v2, setV2] = React.useState(5.25)
  const [v3, setV3] = React.useState(5.25)

  return (
    <View gap="sm" flex center>
      <Text orange strong>Native only</Text>
      <NumberWheelPicker precision={1} value={v1} onChange={setV1} />
      <NumberWheelPicker precision={2} value={v2} onChange={setV2} />
      <NumberWheelPicker precision={2} decimalStep={5} value={v3} onChange={setV3} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Precision & Decimal Step" code={CODE} content={<Content />} />
}
