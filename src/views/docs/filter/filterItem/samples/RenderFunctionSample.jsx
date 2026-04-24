import { FilterHandler, FilterItem, Text, TextInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FilterHandler, FilterItem, TextInput } from '@neko-os/ui'

<FilterHandler onChange={console.log}>
  <FilterItem name="name">
    {({ value, onChange }) => (
      <TextInput
        placeholder="Name"
        value={value}
        onChange={onChange}
      />
    )}
  </FilterItem>
</FilterHandler>
`

function Content() {
  const [state, setState] = React.useState({})

  return (
    <View gap="md">
      <FilterHandler onChange={setState}>
        <FilterItem name="name">
          {({ value, onChange }) => (
            <TextInput
              placeholder="Name"
              value={value}
              onChange={onChange}
              width={250}
            />
          )}
        </FilterItem>
      </FilterHandler>

      <Text text3>
        State: <Text primary strong>{JSON.stringify(state)}</Text>
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Render Function" code={CODE} content={<Content />} />
}
