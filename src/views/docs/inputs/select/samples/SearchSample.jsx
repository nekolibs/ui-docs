import { Select, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Select } from '@neko-os/ui'

<Select
  useSearch
  options={[
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ]}
/>
`

function Item({ initValue, ...props }) {
  const [value, setValue] = React.useState(initValue)

  return (
    <View flex maxWidth={300} gap={10}>
      <Select
        value={value}
        onChange={setValue}
        options={[
          { label: 'John', value: 'A' },
          { label: 'Amanda', value: 'B' },
          { label: 'Chris', value: 'C' },
        ]}
        {...props}
      />
    </View>
  )
}

function Content() {
  return (
    <View gap={10} flex center row wrap>
      <Item placeholder="With no init value" useSearch />
      <Item placeholder="With init value" initValue={'A'} useSearch />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="With Search" code={CODE} content={<Content />} />
}
