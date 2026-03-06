import { Select, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Select } from '@neko-os/ui'

const [value, setValue] = React.useState(['A'])

<Select
  value={value}
  onChange={setValue}
  mutliple
  useSearch
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
    <View width={300} maxWidth="100%" gap={10}>
      <Select
        value={value}
        onChange={setValue}
        multiple
        useSearch
        options={[
          { label: 'John', value: 'A' },
          { label: 'Amanda', value: 'B' },
          { label: 'Chris', value: 'C' },
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
    <View flex center>
      <View centerH row wrap gap={10} fullW>
        <Item placeholder="With no init value" />
        <Item placeholder="With init value" initValue={['A', 'B']} />
        <Item placeholder="With raw option" useRawOption />
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Multiple with Search" code={CODE} content={<Content />} />
}
