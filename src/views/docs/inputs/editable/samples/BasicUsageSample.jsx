import { Editable, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Editable, Text } from '@neko-os/ui'

const [value, setValue] = React.useState('Click me to edit')

<Editable value={value} onSubmit={setValue}>
  <Text>{value}</Text>
</Editable>
`

function Content() {
  const [value, setValue] = React.useState('Click me to edit')

  return (
    <View gap="md">
      <Editable value={value} onSubmit={setValue}>
        <Text>{value}</Text>
      </Editable>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
