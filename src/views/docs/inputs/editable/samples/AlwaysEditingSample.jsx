import { Editable, RateInput, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Editable } from '@neko-os/ui'

<Editable
  alwaysEditing
  value={value}
  onSubmit={setValue}
  placeholder="Always visible input"
/>
`

function Content() {
  const [value, setValue] = React.useState(3)

  return (
    <View gap="md" maxWidth={300}>
      <Editable alwaysEditing value={value} onSubmit={setValue} placeholder="Always visible input" Input={RateInput} />

      <Text text3>
        Value:{' '}
        <Text primary strong>
          {value}
        </Text>
      </Text>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Always Editing" code={CODE} content={<Content />} />
}
