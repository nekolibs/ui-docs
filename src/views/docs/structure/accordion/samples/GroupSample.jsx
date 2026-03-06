import { Accordion, AccordionsGroup, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { AccordionGroup, Text } from '@neko-os/ui'

<AccordionsGroup
  initOpen="b"
  items={[
    { key: 'a', title: 'Item A', children: <Text>Content</Text> },
    { key: 'b', title: 'Item B', children: <Text>Content</Text> },
    { key: 'c', title: 'Item C', children: <Text>Content</Text> },
  ]}
/>`

const CONTENT = (
  <View gap={10} flex>
    <AccordionsGroup
      items={[
        { key: 'a', title: 'Item A', children: <Text>Content</Text> },
        { key: 'b', title: 'Item B', children: <Text>Content</Text> },
        { key: 'c', title: 'Item C', children: <Text>Content</Text> },
      ]}
    />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="AccordionsGroup" code={CODE} content={CONTENT} bg="transparent" padding={0} />
}
