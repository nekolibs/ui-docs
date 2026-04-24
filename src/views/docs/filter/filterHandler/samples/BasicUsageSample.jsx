import { FilterHandler, FilterItem, SearchInput, Select, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FilterHandler, FilterItem, SearchInput, Select } from '@neko-os/ui'

<FilterHandler onChange={({ filters, search, sort }) => console.log({ filters, search, sort })}>
  <FilterItem name="status">
    <Select
      placeholder="Status"
      options={[
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ]}
    />
  </FilterItem>

  <SearchInput />
</FilterHandler>
`

const OPTIONS = [
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
            <Select placeholder="Status" options={OPTIONS} width={200} />
          </FilterItem>

          <SearchInput width={250} />
        </View>
      </FilterHandler>

      <Text text3>
        State: <Text primary strong>{JSON.stringify(state)}</Text>
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
