import { View, Breadcrumb } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Breadcrumb } from '@neko-os/ui'

const items = [
  {
    icon: 'home-3-line',
  },
  {
    label: 'Products',
    icon: 'close-circle-fill',
    iconColor: 'red',
  },
  {
    label: 'Chair',
    icon: 'checkbox-circle-fill',
    iconColor: 'green',
    invert: true,
  },
]

<Breadcrumb items={items} onChange={console.log} />
`

const items = [
  {
    icon: 'home-3-line',
  },
  {
    label: 'Products',
    icon: 'close-circle-fill',
    iconColor: 'red',
  },
  {
    label: 'Chair',
    icon: 'checkbox-circle-fill',
    iconColor: 'green',
    invert: true,
  },
]

const CONTENT = (
  <View center fullH>
    <Breadcrumb items={items} onChange={console.log} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Icons" code={CODE} content={CONTENT} />
}
