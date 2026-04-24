import { SearchInput, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { SearchInput } from '@neko-os/ui'

<SearchInput placeholder="Find users..." sm />
`

function Content() {
  const [value, setValue] = React.useState('')

  return (
    <View gap="md">
      <View row gap="sm" wrap>
        <SearchInput
          value={value}
          onChange={setValue}
          placeholder="Find users..."
          sm
          width={250}
        />
      </View>

      <Text text3>
        Value: <Text primary strong>{JSON.stringify(value)}</Text>
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Custom Placeholder & Size" code={CODE} content={<Content />} />
}
