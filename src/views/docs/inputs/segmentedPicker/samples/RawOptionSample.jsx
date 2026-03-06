import { SegmentedPicker, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { SegmentedPicker, Button } from '@neko-os/ui'

const [value, setValue] = React.useState()

<SegmentedPicker
  value={value}
  onChange={setValue}
  useRawOption
  options={[
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ]}
/>
`

function Content() {
  const [value, setValue] = React.useState({ label: 'Option A', value: 'A' })

  return (
    <View gap={10} flex center>
      <SegmentedPicker
        gap="sm"
        value={value}
        onChange={setValue}
        useRawOption
        options={[
          { label: 'Option A', value: 'A' },
          { label: 'Option B', value: 'B' },
          { label: 'Option C', value: 'C' },
        ]}
      />
      <Text text3>
        Selected:{' '}
        <Text primary strong>
          {JSON.stringify(value)}
        </Text>
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Use raw option" code={CODE} content={<Content />} />
}
