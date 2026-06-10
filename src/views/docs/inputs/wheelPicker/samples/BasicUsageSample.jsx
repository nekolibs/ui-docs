import { Text, View, WheelPicker } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { WheelPicker } from '@neko-os/ui'

const options = [
  { value: 'sm', label: 'Small' },
  { value: 'md', label: 'Medium' },
  { value: 'lg', label: 'Large' },
]

<WheelPicker options={options} value={value} onChange={setValue} />
`

function Content() {
  const [value, setValue] = React.useState('md')
  const options = [
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
  ]

  return (
    <View gap="sm" flex center>
      <Text orange strong>Native only — uses @quidone/react-native-wheel-picker</Text>
      <WheelPicker options={options} value={value} onChange={setValue} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
