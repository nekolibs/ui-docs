import { useState } from 'react'

import { ReturnButton, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ReturnButton } from '@neko-os/ui'

// Default: a left-arrow Button that calls navigation.goBack()
// (react-navigation on native, react-router on web).
<ReturnButton />

// Close icon instead of the arrow
<ReturnButton close />

// With a label + Button modifiers
<ReturnButton label="Back" outline />

// Any icon name
<ReturnButton icon="arrow-left-double-line" />

// Override the action
<ReturnButton onPress={() => doSomething()} />
`

function Content() {
  const [last, setLast] = useState('—')

  return (
    <View gap="md">
      <View row gap="md" centerV wrap>
        <ReturnButton onPress={() => setLast('back')} />
        <ReturnButton close onPress={() => setLast('close')} />
        <ReturnButton label="Back" outline onPress={() => setLast('labeled')} />
      </View>
      <Text text3>Last pressed: {last}</Text>
    </View>
  )
}

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={<Content />} />
}
