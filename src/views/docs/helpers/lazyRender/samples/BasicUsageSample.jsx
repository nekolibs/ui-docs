import { Card, LazyRender, Text, View } from '@neko-os/ui'
import { range } from 'ramda'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { LazyRender } from '@neko-os/ui'

<LazyRender delay={2000}>...</LazyRender>
// On web
<LazyRender whenVisible>...</LazyRender>
<LazyRender whenVisible destroyOffScreen>...</LazyRender>
// On mobile (required minHeight to work properly)
<LazyRender whenVisible minHeight={250}>...</LazyRender>
<LazyRender whenVisible destroyOffScreen minHeight={250}>...</LazyRender>
`

function InnerContent({ label, color }) {
  const [count, setCount] = React.useState()

  React.useEffect(() => {
    console.log('Rendering', label)
    return () => console.log('Unmount', label)
  }, [])

  return (
    <Card height={250} bg={color} center>
      <Text center strong h6>
        {label}
      </Text>
    </Card>
  )
}

const CONTENT = (
  <View gap={15} flex centerH>
    <LazyRender delay={2000} fullW>
      <InnerContent label="Delayed by 2s" color="blue" />
    </LazyRender>
    {range(1, 50).map((i) => (
      <LazyRender whenVisible destroyOffScreen fullW>
        <InnerContent label={`Render when visible and destroy off screen #${i}`} color="red" />
      </LazyRender>
    ))}
    {range(1, 50).map((i) => (
      <LazyRender whenVisible fullW>
        <InnerContent label={`Render when visible #${i}`} color="green" />
      </LazyRender>
    ))}
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} />
}
