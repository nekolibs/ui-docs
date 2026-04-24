import { Editable, NumberInput, Select, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Editable, Select, NumberInput, Text } from '@neko-os/ui'

<Editable
  value={status}
  onSubmit={setStatus}
  Input={Select}
  options={options}
  submitOnChange
>
  <Text>{status}</Text>
</Editable>

<Editable value={count} onSubmit={setCount} Input={NumberInput}>
  <Text>{count}</Text>
</Editable>
`

const OPTIONS = [
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' },
  { label: 'Pending', value: 'Pending' },
]

function Content() {
  const [status, setStatus] = React.useState('Active')
  const [list, setList] = React.useState(['Active'])
  const [count, setCount] = React.useState(42)

  return (
    <View gap="lg">
      <View gap="xs">
        <Text text3 strong>
          Custom Input (Select)
        </Text>
        <Editable value={status} onSubmit={setStatus} Input={Select} options={OPTIONS} submitOnChange>
          <Text>{status}</Text>
        </Editable>
      </View>

      <View gap="xs">
        <Text text3 strong>
          Custom Input (Multi Select)
        </Text>
        <Editable value={list} onSubmit={setList} Input={Select} options={OPTIONS} multiple>
          <Text>{list?.join(', ')}</Text>
        </Editable>
      </View>

      <View gap="xs">
        <Text text3 strong>
          renderInput (NumberInput)
        </Text>
        <Editable value={count} onSubmit={setCount} Input={NumberInput}>
          <Text>{count}</Text>
        </Editable>
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Custom Input" code={CODE} content={<Content />} />
}
