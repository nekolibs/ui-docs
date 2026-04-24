import { FilterHandler, FilterItem, SearchInput, Select, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FilterHandler, FilterItem, SearchInput, Select } from '@neko-os/ui'

<FilterHandler
  initialFilters={{ status: 'active' }}
  initialSearch="hello"
  initialSort="name"
  onChange={console.log}
>
  <FilterItem name="status">
    <Select placeholder="Status" options={options} />
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
      <FilterHandler
        initialFilters={{ status: 'active' }}
        initialSearch="hello"
        initialSort="name"
        onChange={setState}
      >
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
  return <SampleCodeBlock title="Initial Values" code={CODE} content={<Content />} />
}
