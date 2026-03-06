import { Breadcrumb, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Breadcrumb } from '@neko-os/ui'

<Breadcrumb items={items} sm />
<Breadcrumb items={items} md />
<Breadcrumb items={items} lg />
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
  <View gap={25} center fullH>
    <Breadcrumb items={items} sm />
    <Breadcrumb items={items} md />
    <Breadcrumb items={items} lg />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
