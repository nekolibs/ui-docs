import { MaskInput, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { MaskInput } from '@neko-os/ui'

<MaskInput placeholder="(99) 99999-9999" mask="(99) 99999-9999" useRawValue />
`

function Item({ label, ...props }) {
  const [value, setValue] = React.useState('')

  return (
    <View gap={10} flex>
      <MaskInput placeholder={label} mask="(99) 99999-9999" value={value} onChange={setValue} {...props} />
      <Text>Result: {value}</Text>
    </View>
  )
}

function Content() {
  return (
    <View gap={10} flex row>
      <Item label="Normal" />
      <Item label="Raw" useRawValue />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="useRawValue" code={CODE} content={<Content />} />
}
