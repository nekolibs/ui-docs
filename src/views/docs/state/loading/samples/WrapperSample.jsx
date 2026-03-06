import { LoadingView, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { LoadingView, Text } from '@neko-os/ui'

<LoadingView active width={300} ratio={1} bg="red" center br="md" size="xl">
  <Text h1>Title</Text>
  <Text>Subtitle</Text>
</LoadingView>

`

function Content() {
  const [result, setResult] = React.useState()

  return (
    <View center>
      <LoadingView active width={300} ratio={1} bg="red" center br="md" size="xl">
        <Text h1>Title</Text>
        <Text>Subtitle</Text>
      </LoadingView>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="LoadingView" code={CODE} content={<Content />} />
}
