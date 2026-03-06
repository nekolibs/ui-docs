import { FlatList, Text } from '@neko-os/ui'
import { range } from 'ramda'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FlatList, Text } from '@neko-os/ui'
import { range } from 'ramda'

const data = range(0, 60)

<FlatList
  height={300}
  keyExtractor={(i) => i}
  data={data}
  divider
  renderItem={({ item }) => <Text>Line {item}</Text>}
  renderHeader={() => <Text>HEADER</Text>}
  renderFooter={() => <Text>FOOTER</Text>}
/>
`

const data = range(0, 60)

const CONTENT = (
  <FlatList
    height={320}
    divider
    keyExtractor={(i) => i}
    data={data}
    renderItem={({ item }) => (
      <Text padding="md" center>
        Line {item}
      </Text>
    )}
    renderHeader={() => (
      <Text padding="md" center>
        HEADER
      </Text>
    )}
    renderFooter={() => (
      <Text padding="md" center>
        FOOTER
      </Text>
    )}
  />
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} padding={0} />
}
