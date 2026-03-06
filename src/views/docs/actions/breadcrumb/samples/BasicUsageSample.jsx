import { View, Breadcrumb } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Breadcrumb } from '@neko-os/ui'

const items = [
  {
    label: 'Home',
    icon: 'home-3-line',
  },
  { label: 'Products' },
  { label: 'Chair' },
]

<Breadcrumb items={items} onChange={console.log} />
`

const items = [
  {
    label: 'Home',
    icon: 'home-3-line',
  },
  { label: 'Products' },
  { label: 'Chair' },
]

const CONTENT = (
  <View center fullH>
    <Breadcrumb items={items} onChange={console.log} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
