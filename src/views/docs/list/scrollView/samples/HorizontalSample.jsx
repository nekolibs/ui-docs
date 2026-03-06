import { ScrollView, View, Text } from '@neko-os/ui'
import { range } from 'ramda'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ScrollView, Text } from '@neko-os/ui'
import { range } from 'ramda'

<ScrollView padding="lg" fullW horizontal fullH centerV>
  {range(0, 60).map((i) => (
    <View key={i} width={100} flex="1 0 auto">
      <Text key={i}>Line {i}</Text>
    </View>
  ))}
</ScrollView>
`

const CONTENT = (
  <ScrollView padding="lg" fullW horizontal fullH centerV>
    {range(0, 60).map((i) => (
      <View key={i} width={100} flex="1 0 auto">
        <Text key={i}>Line {i}</Text>
      </View>
    ))}
  </ScrollView>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Horizontal" code={CODE} content={CONTENT} padding={0} />
}
