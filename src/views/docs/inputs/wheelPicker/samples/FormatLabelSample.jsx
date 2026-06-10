import { Text, View, WheelPicker } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { WheelPicker } from '@neko-os/ui'

<WheelPicker
  range={[0, 59]}
  value={value}
  onChange={setValue}
  formatLabel={(v) => String(v).padStart(2, '0')}
/>
`

function Content() {
  const [value, setValue] = React.useState(5)

  return (
    <View gap="sm" flex center>
      <Text orange strong>Native only</Text>
      <WheelPicker range={[0, 59]} value={value} onChange={setValue} formatLabel={(v) => String(v).padStart(2, '0')} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Format Label" code={CODE} content={<Content />} />
}
