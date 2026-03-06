import { Loading, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Loading } from '@neko-os/ui'

<Loading green />
<Loading divider />
<Loading color="primary_op40" />
<Loading color="#6e6e6e" />
`

function Content() {
  const [result, setResult] = React.useState()

  return (
    <View row gap={10} flex center>
      <Loading green />
      <Loading orange />
      <Loading primary />
      <Loading color="divider" />
      <Loading color="primary_op40" />
      <Loading color="#6e6e6e" />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
