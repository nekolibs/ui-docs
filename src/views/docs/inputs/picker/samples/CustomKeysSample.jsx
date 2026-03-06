import { Picker, Switch, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Picker, Switch } from '@neko-os/ui'

const [value, setValue] = React.useState('A')

<Picker
  value={value}
  onChange={setValue}
  valueKey="id"
  labelKey="name"
  gap="lg"
  options={[
    { name: 'Option A', id: 'A' },
    { name: 'Option B', id: 'B' },
    { name: 'Option C', id: 'C' },
  ]}
  renderOption={({ option, selected, onChange }) => (
    <Switch value={selected} onChange={onChange} label={option.name} />
  )}
/>
`

function Content() {
  const [value, setValue] = React.useState('A')

  return (
    <View gap={10} flex center>
      <Picker
        gap="lg"
        value={value}
        onChange={setValue}
        valueKey="id"
        labelKey="name"
        options={[
          { name: 'Option A', id: 'A' },
          { name: 'Option B', id: 'B' },
          { name: 'Option C', id: 'C' },
        ]}
        renderOption={({ option, selected, onChange }) => (
          <Switch value={selected} onChange={onChange} label={option?.name} />
        )}
      />
      <Text text3>
        Selected:{' '}
        <Text primary strong>
          {value}
        </Text>
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Custom label/value keys" code={CODE} content={<Content />} />
}
