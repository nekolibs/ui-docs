import { Link, Tooltip, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Tooltip, Link } from '@neko-os/ui'

<Tooltip label="Tooltip content" icon="information-2-fill">
  <Link label="Info icon" />
</Tooltip>

<Tooltip label="Tooltip content" icon="checkbox-circle-fill" invert iconProps={{ color: 'green' }}>
  <Link label="Green icon" />
</Tooltip>
`

const CONTENT = (
  <View center fullH row gap="lg">
    <Tooltip label="Tooltip content" icon="information-2-fill">
      <Link label="Info icon" />
    </Tooltip>

    <Tooltip label="Tooltip content" icon="checkbox-circle-fill" invert iconProps={{ color: 'green' }}>
      <Link label="Green icon" />
    </Tooltip>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="With icon" code={CODE} content={CONTENT} />
}
