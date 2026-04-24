import { FilterHandler, FilterItem, Select, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FilterHandler, FilterItem, Select } from '@neko-os/ui'

<FilterHandler onChange={console.log}>
  <FilterItem name="category">
    <Select
      placeholder="Category"
      options={[
        { label: 'Design', value: 'design' },
        { label: 'Development', value: 'development' },
        { label: 'Marketing', value: 'marketing' },
      ]}
    />
  </FilterItem>
</FilterHandler>
`

const OPTIONS = [
  { label: 'Design', value: 'design' },
  { label: 'Development', value: 'development' },
  { label: 'Marketing', value: 'marketing' },
]

function Content() {
  const [state, setState] = React.useState({})

  return (
    <View gap="md">
      <FilterHandler onChange={setState}>
        <FilterItem name="category">
          <Select placeholder="Category" options={OPTIONS} width={250} />
        </FilterItem>
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
