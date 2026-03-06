import { Menu, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Menu } from '@neko-os/ui'

const items = [
  { label: 'Item 1', onPress: () => console.log('Item 1 pressed') },
  { label: 'Item 2' },
  { label: 'Item 3' },
]

<Menu items={items} />
`

const items = [
  { label: 'Item 1', onPress: () => console.log('Item 1 pressed') },
  { label: 'Item 2' },
  { label: 'Item 3' },
]

const CONTENT = (
  <View row gap={15} flex center>
    <Menu items={items} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Item click/press" code={CODE} content={CONTENT} />
}
