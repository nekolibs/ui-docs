import { Dropdown, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Dropdown } from '@neko-os/ui'

const items = [
  { icon: 'store-2-line', label: 'Item 1' },
  { icon: 'bank-line', label: 'Item 2' },
]

<Dropdown label="Click me" items={items} />
<Dropdown label="Hover me" trigger="hover" items={items} />
`

const items = [
  { icon: 'store-2-line', label: 'Item 1' },
  { icon: 'bank-line', label: 'Item 2' },
]

const CONTENT = (
  <View row gap={15} flex center>
    <Dropdown label="Click me" items={items} onChange={({ label }) => alert('Clicked: ' + label)} />
    <Dropdown label="Hover me" trigger="hover" items={items} onChange={({ label }) => alert('Clicked: ' + label)} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
