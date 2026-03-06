import { Button, Popover, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Popover, Text } from '@neko-os/ui'

<Popover content={<Text>Popover content</Text>} placement="top">
  <Link>Hover here</Link>
</Popover>

<Popover content={<Text>Popover content</Text>} placement="bottomRight">
  <Link>Hover here</Link>
</Popover>
`

function Item({ placement }) {
  if (!placement) return <View flex />

  return (
    <View flex center>
      <Popover content={<Text>Popover content test here</Text>} placement={placement}>
        <Button label={placement} outline text3 fullW sm />
      </Popover>
    </View>
  )
}

const OPTIONS = [
  [null, 'topLeft', 'top', 'topRight', null], //
  ['leftTop', null, null, null, 'rightTop'], //
  ['left', null, null, null, 'right'], //
  ['leftBottom', null, null, null, 'rightBottom'], //
  [null, 'bottomLeft', 'bottom', 'bottomRight', null], //
]

function Content() {
  return (
    <View center>
      <View maxWidth={'100%'} width={700} gap={20}>
        {OPTIONS.map((row, ri) => (
          <View key={ri} center fullH gap={10} row>
            {row.map((placement, i) => (
              <Item key={i} placement={placement} />
            ))}
          </View>
        ))}
      </View>
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Placement" code={CODE} content={<Content />} />
}
