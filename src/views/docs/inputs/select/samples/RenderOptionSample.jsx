import { Select, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Select, View, Text } from '@neko-os/ui'

<Select
  options={[
    { label: 'Option A', value: 'A', color: 'green' },
    { label: 'Option B', value: 'B', color: 'orange' },
    { label: 'Option C', value: 'C', color: 'red' },
  ]}
  renderOption={({ option }) => (
    <View flex row>
      <View br="sm" padding="xxs" bg={option.color}>
        <Text>{option.label}</Text>
      </View>
    </View>
  )}
  {...props}
/>
`

function Item({ initValue, ...props }) {
  const [value, setValue] = React.useState(initValue)

  return (
    <View flex maxWidth={300} gap={10}>
      <Select
        value={value}
        onChange={setValue}
        options={[
          { label: 'Option A', value: 'A', color: 'green' },
          { label: 'Option B', value: 'B', color: 'orange' },
          { label: 'Option C', value: 'C', color: 'red' },
        ]}
        renderOption={({ option }) => (
          <View br="sm" padding="xxs" bg={option.color}>
            <Text>{option.label}</Text>
          </View>
        )}
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
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Render Option" code={CODE} content={<Content />} />
}
