import { Editable, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Editable, Text } from '@neko-os/ui'

<Editable
  emptyLabel="No category"
  emptyIcon="RiAddLine"
  onSubmit={setValue}
>
  <Text>{value}</Text>
</Editable>
`

function Content() {
  const [value, setValue] = React.useState('')

  return (
    <View gap="lg">
      <View gap="xs">
        <Editable value={value} emptyLabel="No name" emptyIcon="RiAddLine" onSubmit={setValue}>
          <Text>{value}</Text>
        </Editable>
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Empty State" code={CODE} content={<Content />} />
}
