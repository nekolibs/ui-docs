import { Picker, Switch, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Picker, Switch } from '@neko-os/ui'

function fetchOptions() {
  return new Promise((success) => {
    setTimeout(() => {
      success([
        { label: 'Lazy Option A', value: 'A' },
        { label: 'Lazy Option B', value: 'B' },
        { label: 'Lazy Option C', value: 'C' },
      ])
    }, 2000)
  })
}

<Picker
  options={fetchOptions}
  renderOption={({ option, selected, onChange }) => (
    <Switch value={selected} onChange={onChange} label={option.label} />
  )}
/>
`

function fetchOptions() {
  return new Promise((success) => {
    console.log('LAZY FETCH')
    setTimeout(() => {
      success([
        { label: 'Lazy Option A', value: 'A' },
        { label: 'Lazy Option B', value: 'B' },
        { label: 'Lazy Option C', value: 'C' },
      ])
    }, 2000)
  })
}

function Content() {
  const [value, setValue] = React.useState('A')

  return (
    <View gap={10} flex center>
      <Picker
        value={value}
        onChange={setValue}
        row={false}
        options={fetchOptions}
        renderOption={({ option, selected, onChange }) => (
          <Switch value={selected} onChange={onChange} label={option.label} />
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
  return <SampleCodeBlock title="Async options" code={CODE} content={<Content />} />
}
