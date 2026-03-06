import { Select, Text, View } from '@neko-os/ui'
import { range } from 'ramda'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Select } from '@neko-os/ui'

<Select useBottomDrawer />
<Select useBottomDrawer={{sm: true, native: true}} />
`

function Item({ initValue, ...props }) {
  const [value, setValue] = React.useState(initValue)

  return (
    <View flex maxWidth={300} gap={10}>
      <Select
        value={value}
        onChange={setValue}
        useBottomDrawer
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
      <Item placeholder="Using bottom drawer" />
      <Item placeholder="Bottom drawer on SM" useBottomDrawer={{ sm: true, native: true }} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="useBottomDrawer" code={CODE} content={<Content />} />
}
