import { FilterHandler, FilterItem, Select, Text, TextInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FilterHandler, FilterItem, Select, TextInput } from '@neko-os/ui'

<FilterHandler onChange={console.log}>
  <FilterItem name="status">
    <Select
      placeholder="Status"
      options={[
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ]}
    />
  </FilterItem>

  <FilterItem name="name">
    <TextInput placeholder="Name" />
  </FilterItem>
</FilterHandler>
`

const STATUS_OPTIONS = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Pending', value: 'pending' },
]

function Content() {
  const [state, setState] = React.useState({})

  return (
    <View gap="md">
      <FilterHandler onChange={setState}>
        <View row gap="sm" wrap>
          <FilterItem name="status">
            <Select placeholder="Status" options={STATUS_OPTIONS} width={200} />
          </FilterItem>

          <FilterItem name="name">
            <TextInput placeholder="Name" width={200} />
          </FilterItem>
        </View>
      </FilterHandler>

      <Text text3>
        State: <Text primary strong>{JSON.stringify(state)}</Text>
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Multiple Filters" code={CODE} content={<Content />} />
}
