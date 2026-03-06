import { Select, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Picker, Switch } from '@neko-os/ui'

function fetchOptions() {
  return new Promise((success) => {
    setTimeout(() => {
      success([
        { label: 'Lazy Option A', value: 'A' },
        { label: 'Lazy Option B', value: 'B' },
        { label: 'Lazy Option C', value: 'C' },
      ])
    }, 2000)
  })
}

<Select options={fetchOptions} />
<Select options={fetchOptions} useRawOption />
<Select options={fetchOptions} initialLabel="Lazy Option A" value="A" />
`

function fetchOptions() {
  return new Promise((success) => {
    setTimeout(() => {
      success([
        { label: 'Lazy Option A', value: 'A' },
        { label: 'Lazy Option B', value: 'B' },
        { label: 'Lazy Option C', value: 'C' },
      ])
    }, 400)
  })
}

function Item({ initValue, ...props }) {
  const [value, setValue] = React.useState(initValue)

  return (
    <View flex maxWidth={300} gap={10}>
      <Select value={value} onChange={setValue} options={fetchOptions} {...props} />

      <Text text3>
        Selected:{' '}
        <Text primary strong>
          {JSON.stringify(value)}
        </Text>
      </Text>
    </View>
  )
}

function Content() {
  return (
    <View flex centerV>
      <View row fullW wrap gap="sm" centerH>
        <Item placeholder="With no init value" />
        <Item placeholder="With init value" initValue={'A'} initialLabel="Lazy Option A" />
        <Item placeholder="With raw init value" initValue={{ label: 'Lazy Option A', value: 'A' }} useRawOption />
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Async options" code={CODE} content={<Content />} />
}
