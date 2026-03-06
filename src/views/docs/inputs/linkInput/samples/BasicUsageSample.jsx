import { Icon, LinkInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { LinkInput } from '@neko-os/ui'

<LinkInput value="With Value" onPress={() => {}} />
<LinkInput placeholder="Placeholder" onPress={() => {}} />
`

function Content() {
  const [value, setValue] = React.useState('')

  return (
    <View gap={10} flex centerV>
      <LinkInput placeholder="Name" />
      <LinkInput value="With Value" />
      <LinkInput prefix={<Icon name="user-line" />} placeholder="Username" />
      <LinkInput prefixIcon="user-line" placeholder="Username" />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
