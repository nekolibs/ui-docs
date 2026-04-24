import { FilterHandler, NumberRangeInput, PopoverFilterItem, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FilterHandler, NumberRangeInput, PopoverFilterItem } from '@neko-os/ui'

<FilterHandler onChange={console.log}>
  <PopoverFilterItem name="price" label="Price range">
    <NumberRangeInput />
  </PopoverFilterItem>
</FilterHandler>
`

function Content() {
  const [state, setState] = React.useState({})

  return (
    <View gap="md">
      <FilterHandler onChange={setState}>
        <PopoverFilterItem name="price" label="Price range" width={200}>
          <NumberRangeInput />
        </PopoverFilterItem>
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
