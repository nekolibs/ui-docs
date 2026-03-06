import { Icon, MaskInput, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { MaskInput } from '@neko-os/ui'

<MaskInput placeholder="(99) 99999-9999" mask="(99) 99999-9999" />
<MaskInput placeholder="AAA-9999" mask="AAA-9999" />
<MaskInput placeholder="AAA-9999" mask="AAA-aaa-test" />
`

function Content() {
  return (
    <View gap={10} flex centerV>
      <MaskInput placeholder="(99) 99999-9999" mask="(99) 99999-9999" />
      <MaskInput placeholder="AAA-9999" mask="AAA-9999" />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
