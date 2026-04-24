import { SearchInput, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { SearchInput } from '@neko-os/ui'

const [value, setValue] = React.useState('')

<SearchInput value={value} onChange={setValue} />
`

function Content() {
  const [value, setValue] = React.useState('')

  return (
    <View gap="md">
      <SearchInput value={value} onChange={setValue} width={300} />

      <Text text3>
        Value: <Text primary strong>{JSON.stringify(value)}</Text>
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Standalone (Controlled)" code={CODE} content={<Content />} />
}
