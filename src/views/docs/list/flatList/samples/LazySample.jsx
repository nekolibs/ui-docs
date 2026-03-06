import { FlatList, Text, View } from '@neko-os/ui'
import { range } from 'ramda'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { FlatList } from '@neko-os/ui'

// On web
<FlatList lazy ... />
<FlatList onlyOnScreen ... />

// On mobile (required minHeight to work properly)
<FlatList lazy itemMinHeight={50} ... />
<FlatList onlyOnScreen itemMinHeight={50} ... />
`

const data = range(0, 1000)

const CONTENT = (
  <FlatList
    height={420}
    divider
    lazy
    onlyOnScreen
    itemMinHeight={25}
    keyExtractor={(i) => i}
    data={data}
    renderItem={({ item }) => (
      <View>
        <Text padding="md" center>
          Line {item}
        </Text>
      </View>
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
  return <SampleCodeBlock title="lazy / onlyOnScreen" code={CODE} content={CONTENT} padding={0} />
}
