import { FlatList, Text, View } from '@neko-os/ui'
import { range } from 'ramda'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FlatList, Text, View } from '@neko-os/ui'
import { range } from 'ramda'

const data = range(0, 60)

<FlatList
  fullW
  fullH
  centerV
  horizontal
  keyExtractor={(i) => i}
  data={data}
  renderItem={({ item }) => (
    <View width={100} flex="1 0 auto">
      <Text>Line {item}</Text>
    </View>
  )}
/>
`

const data = range(0, 60)

const CONTENT = (
  <FlatList
    fullW
    fullH
    centerV
    horizontal
    keyExtractor={(i) => i}
    data={data}
    renderItem={({ item }) => (
      <View width={100} flex="1 0 auto" padding="md">
        <Text>Line {item}</Text>
      </View>
    )}
  />
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Horizontal" code={CODE} content={CONTENT} padding={0} />
}
