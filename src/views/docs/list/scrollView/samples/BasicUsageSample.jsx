import { ScrollView, View, Text } from '@neko-os/ui'
import { range } from 'ramda'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ScrollView, Text } from '@neko-os/ui'
import { range } from 'ramda'

<ScrollView padding="lg" height={200}>
  {range(0, 2000).map((i) => (
    <Text key={i}>Line {i}</Text>
  ))}
</ScrollView>
`

const CONTENT = (
  <ScrollView padding="lg" height={200}>
    {range(0, 2000).map((i) => (
      <Text key={i}>Line {i}</Text>
    ))}
  </ScrollView>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} padding={0} />
}
