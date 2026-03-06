import { Button, Tooltip, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Tooltip, Text } from '@neko-os/ui'

<Tooltip label="Tooltip content" placement="top">
  <Link>Hover here</Link>
</Tooltip>

<Tooltip label="Tooltip content" placement="bottomRight">
  <Link>Hover here</Link>
</Tooltip>
`

function Item({ placement }) {
  if (!placement) return <View flex />

  return (
    <View flex center>
      <Tooltip label="Tooltip content test here" placement={placement}>
        <Button label={placement} outline text3 fullW sm />
      </Tooltip>
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
