import { useState } from 'react'

import { ReturnLink, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ReturnLink } from '@neko-os/ui'

// Default: a left-arrow Link that calls navigation.goBack()
// (react-navigation on native, react-router on web).
<ReturnLink />

// Close icon instead of the arrow
<ReturnLink close />

// Any icon name
<ReturnLink icon="arrow-left-double-line" />

// Extra props pass to the Icon (size, color)
<ReturnLink xl color="primary" />

// Override the action
<ReturnLink onPress={() => doSomething()} />
`

function Content() {
  const [last, setLast] = useState('—')

  return (
    <View gap="md">
      <View row gap="xl" centerV>
        <ReturnLink xl onPress={() => setLast('back')} />
        <ReturnLink close xl onPress={() => setLast('close')} />
        <ReturnLink icon="arrow-left-double-line" xl onPress={() => setLast('custom icon')} />
        <ReturnLink xl color="primary" onPress={() => setLast('colored')} />
      </View>
      <Text text3>Last pressed: {last}</Text>
    </View>
  )
}

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
