import { Button, FilterHandler, FilterItem, SearchInput, Select, Text, View, useFilter } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button, FilterHandler, FilterItem, SearchInput, Select, useFilter } from '@neko-os/ui'

function ResetButton() {
  const { onReset } = useFilter()
  return <Button label="Reset" onPress={onReset} />
}

// onReset restores initial values: initialFilters, initialSearch, initialSort
<FilterHandler initialFilters={{ status: 'active' }} initialSearch="test">
  <FilterItem name="status">
    <Select placeholder="Status" options={options} />
  </FilterItem>

  <SearchInput />
  <ResetButton />
</FilterHandler>
`

const OPTIONS = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Pending', value: 'pending' },
]

function ResetButton() {
  const { onReset } = useFilter()
  return <Button label="Reset" onPress={onReset} type="secondary" sm />
}

function Content() {
  const [state, setState] = React.useState({})

  return (
    <View gap="md">
      <FilterHandler
        initialFilters={{ status: 'active' }}
        initialSearch="test"
        onChange={setState}
      >
        <View row gap="sm" wrap centerV>
          <FilterItem name="status">
            <Select placeholder="Status" options={OPTIONS} width={200} />
          </FilterItem>

          <SearchInput width={250} />
          <ResetButton />
        </View>
      </FilterHandler>

      <Text text3>
        State: <Text primary strong>{JSON.stringify(state)}</Text>
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Reset (Restore Initial Values)" code={CODE} content={<Content />} />
}
