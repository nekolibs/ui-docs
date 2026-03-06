import { Loading, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Loading } from '@neko-os/ui'

<Loading xxxs />
<Loading xxs />
<Loading xs />
<Loading sm />
<Loading md />
<Loading lg />
<Loading xl />
<Loading xxl />
<Loading xxxl />
<Loading size={42} />
`

function Content() {
  const [result, setResult] = React.useState()

  return (
    <View row gap={10} flex center>
      <Loading xxxs />
      <Loading xxs />
      <Loading xs />
      <Loading sm />
      <Loading md />
      <Loading lg />
      <Loading xl />
      <Loading xxl />
      <Loading xxxl />
      <Loading size={42} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={<Content />} />
}
