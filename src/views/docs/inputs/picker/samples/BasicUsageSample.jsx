import { Button, Picker, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Picker, Button } from '@neko-os/ui'

const [value, setValue] = React.useState('A')

<Picker
  value={value}
  onChange={setValue}
  options={[
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ]}
  renderOption={({ option, selected, onChange }) => (
    <Button
      outline={!selected}
      color={selected ? 'primary' : 'text4'}
      onPress={onChange}
      label={option?.label}
      icon={selected && 'checkbox-circle-fill'}
    />
  )}
/>
`

function Content() {
  const [value, setValue] = React.useState('A')

  return (
    <View gap={10} flex center>
      <Picker
        gap="sm"
        value={value}
        onChange={setValue}
        options={[
          { label: 'Option A', value: 'A' },
          { label: 'Option B', value: 'B' },
          { label: 'Option C', value: 'C' },
        ]}
        renderOption={({ option, selected, onChange }) => (
          <Button
            outline={!selected}
            color={selected ? 'primary' : 'text4'}
            onPress={onChange}
            label={option?.label}
            icon={selected && 'checkbox-circle-fill'}
          />
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
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
