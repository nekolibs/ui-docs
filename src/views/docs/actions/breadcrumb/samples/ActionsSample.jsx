import { View, Breadcrumb } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Breadcrumb } from '@neko-os/ui'

const items = [
  {
    label: 'Home',
    icon: 'home-3-line',
    onPress: () => console.log('Home clicked'),
  },
  {
    label: 'Products',
    onPress: () => console.log('Products clicked'),
  },
  { label: 'Chair' },
]

<Breadcrumb items={items} onChange={console.log} />
`

const items = [
  {
    label: 'Home',
    icon: 'home-3-line',
    onPress: () => console.log('Home clicked'),
  },
  {
    label: 'Products',
    onPress: () => console.log('Products clicked'),
  },
  { label: 'Chair' },
]

const CONTENT = (
  <View center fullH>
    <Breadcrumb items={items} onChange={console.log} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Actions" code={CODE} content={CONTENT} />
}
