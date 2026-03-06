import { Menu, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Menu } from '@neko-os/ui'

const items = [{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]

<Menu items={items} activeIndex={0} />
`

const items = [
  { label: 'Item 1' },
  { label: 'Item 2' },
  {
    label: 'Item 3',
    invert: true,
    icon: 'arrow-down-s-fill',
    subItems: [
      { label: 'Item 3.1' },
      {
        label: 'Item 3.2',
        subItems: [
          { label: 'Items 3.2.1' },
          { label: 'Items 3.2.2' },
          { label: 'Items 3.2.3' },
          { label: 'Items 3.2.4' },
        ],
      },
    ],
  },
]

function Content() {
  return (
    <View row gap={15} flex center>
      <Menu items={items} onChange={console.log} activeIndex={1} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="With Submenu" code={CODE} content={<Content />} />
}
