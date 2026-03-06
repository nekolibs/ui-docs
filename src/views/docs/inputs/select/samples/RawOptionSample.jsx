import { Select, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Select } from '@neko-os/ui'

const [value, setValue] = React.useState({ label: 'Option B', value: 'B' })

<Select
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

function Item({ initValue, ...props }) {
  const [value, setValue] = React.useState(initValue)

  return (
    <View flex maxWidth={300} gap={10}>
      <Select
        value={value}
        onChange={setValue}
        useRawOption
        options={[
          { label: 'Option A', value: 'A' },
          { label: 'Option B', value: 'B' },
          { label: 'Option C', value: 'C' },
        ]}
        {...props}
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

function Content() {
  return (
    <View gap={10} flex center row>
      <Item placeholder="With no init value" />
      <Item placeholder="With init value" initValue={{ label: 'Option B', value: 'B' }} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Use raw option" code={CODE} content={<Content />} />
}
