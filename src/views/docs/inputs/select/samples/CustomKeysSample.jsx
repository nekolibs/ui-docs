import { Select, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Picker, Switch } from '@neko-os/ui'

const [value, setValue] = React.useState('A')

<Select
  value={value}
  onChange={setValue}
  valueKey="id"
  labelKey="name"
  options={[
    { name: 'Option A', id: 'A' },
    { name: 'Option B', id: 'B' },
    { name: 'Option C', id: 'C' },
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
        valueKey="id"
        labelKey="name"
        options={[
          { name: 'Option A', id: 'A' },
          { name: 'Option B', id: 'B' },
          { name: 'Option C', id: 'C' },
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
    <View gap={10} flex center row wrap>
      <Item placeholder="With no init value" />
      <Item placeholder="With init value" initValue={'A'} />
      <Item placeholder="With init raw value" initValue={{ name: 'Option A', id: 'A' }} useRawOption />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Custom option's label/value keys" code={CODE} content={<Content />} />
}
