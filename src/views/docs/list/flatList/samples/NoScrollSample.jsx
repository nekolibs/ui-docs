import { FlatList, Text } from '@neko-os/ui'
import { range } from 'ramda'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FlatList, Text } from '@neko-os/ui'
import { range } from 'ramda'

const data = range(0, 10)

<FlatList
  noScroll
  keyExtractor={(i) => i}
  data={data}
  divider
  renderItem={({ item }) => <Text>Line {item}</Text>}
/>
`

const data = range(0, 10)

const CONTENT = (
  <FlatList
    divider
    noScroll
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
  return <SampleCodeBlock title="No Scroll" code={CODE} content={CONTENT} padding={0} />
}
