import { FilterHandler, NumberRangeInput, PopoverFilterItem, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FilterHandler, NumberRangeInput, PopoverFilterItem } from '@neko-os/ui'

// Without submitOnClose: shows an "Apply" button inside the popover
<PopoverFilterItem name="price" label="With Apply button">
  <NumberRangeInput />
</PopoverFilterItem>

// With submitOnClose: applies automatically when the popover closes
<PopoverFilterItem name="price" label="Submit on close" submitOnClose>
  <NumberRangeInput />
</PopoverFilterItem>
`

function Content() {
  const [state, setState] = React.useState({})

  return (
    <View gap="md">
      <FilterHandler onChange={setState}>
        <View row gap="sm" wrap>
          <PopoverFilterItem name="priceA" label="With Apply button" width={200}>
            <NumberRangeInput />
          </PopoverFilterItem>

          <PopoverFilterItem name="priceB" label="Submit on close" width={200} submitOnClose>
            <NumberRangeInput />
          </PopoverFilterItem>
        </View>
      </FilterHandler>

      <Text text3>
        State: <Text primary strong>{JSON.stringify(state)}</Text>
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="submitOnClose" code={CODE} content={<Content />} />
}
