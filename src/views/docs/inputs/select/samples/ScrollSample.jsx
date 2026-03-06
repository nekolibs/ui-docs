import { Select, Text, View } from '@neko-os/ui'
import { range } from 'ramda'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Select } from '@neko-os/ui'

const [value, setValue] = React.useState('A')

<Select
  value={value}
  onChange={setValue}
  options={largeOptionsArray}
/>
`

function Item({ initValue, ...props }) {
  const [value, setValue] = React.useState(initValue)

  return (
    <View flex maxWidth={300} gap={10}>
      <Select
        value={value}
        onChange={setValue}
        options={range(1, 100).map((i) => ({ label: `Option ${i}`, value: i }))}
        {...props}
      />

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
    <View gap={10} flex center row wrap>
      <Item placeholder="Single select" />
      <Item placeholder="Multi select" multiple />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Scroll" code={CODE} content={<Content />} />
}
