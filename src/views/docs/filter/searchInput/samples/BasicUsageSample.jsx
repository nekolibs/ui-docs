import { FilterHandler, SearchInput, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FilterHandler, SearchInput } from '@neko-os/ui'

<FilterHandler onChange={({ search }) => console.log(search)}>
  <SearchInput />
</FilterHandler>
`

function Content() {
  const [state, setState] = React.useState({})

  return (
    <View gap="md">
      <FilterHandler onChange={setState}>
        <SearchInput width={300} />
      </FilterHandler>

      <Text text3>
        Search: <Text primary strong>{JSON.stringify(state.search)}</Text>
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
