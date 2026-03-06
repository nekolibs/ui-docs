import { Picker, Switch, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Picker, Switch } from '@neko-os/ui'

const [value, setValue] = React.useState(['A'])

<Picker
  value={value}
  onChange={setValue}
  row={false}
  multiple
  options={[
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ]}
  renderOption={({ option, selected, onChange }) => (
    <Switch value={selected} onChange={onChange} label={option.label} />
  )}
/>
`

function Content() {
  const [value, setValue] = React.useState(['A'])

  return (
    <View gap={10} flex center>
      <Picker
        value={value}
        onChange={setValue}
        row={false}
        multiple
        options={[
          { label: 'Option A', value: 'A' },
          { label: 'Option B', value: 'B' },
          { label: 'Option C', value: 'C' },
        ]}
        renderOption={({ option, selected, onChange }) => (
          <Switch value={selected} onChange={onChange} label={option.label} />
        )}
      />
      <Text text3>
        Selected:{' '}
        <Text primary strong>
          {value?.join(', ')}
        </Text>
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Direction" code={CODE} content={<Content />} />
}
