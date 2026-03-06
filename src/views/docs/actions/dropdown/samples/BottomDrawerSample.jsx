import { Dropdown, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Dropdown } from '@neko-os/ui'

<Dropdown useBottomDrawer />
<Dropdown  useBottomDrawer={{sm: true, native: true}} />
`

const items = [
  { icon: 'store-2-line', label: 'Item 1' },
  { icon: 'bank-line', label: 'Item 2' },
]

const CONTENT = (
  <View row gap={15} flex center>
    <Dropdown
      label="Using bottom drawer"
      items={items}
      onChange={({ label }) => alert('Clicked: ' + label)}
      useBottomDrawer
    />
    <Dropdown
      label="Bottom drawer on SM"
      items={items}
      onChange={({ label }) => alert('Clicked: ' + label)}
      useBottomDrawer={{ sm: true, native: true }}
    />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="useBottomDrawer" code={CODE} content={CONTENT} />
}
