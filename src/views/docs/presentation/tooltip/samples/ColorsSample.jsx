import { Link, Tooltip, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Tooltip, Link } from '@neko-os/ui'

<Tooltip label="Tooltip content" green>
  <Link label="Green" />
</Tooltip>

<Tooltip label="Tooltip content" red>
  <Link label="Red" />
</Tooltip>

<Tooltip label="Tooltip content" color="white">
  <Link label="White" />
</Tooltip>

<Tooltip label="Tooltip content" color="black">
  <Link label="Black" />
</Tooltip>

<Tooltip label="Tooltip content" color="navy_op40">
  <Link label="Opacity" />
</Tooltip>
`

const CONTENT = (
  <View center fullH row gap="lg">
    <Tooltip label="Tooltip content" green>
      <Link label="Green" />
    </Tooltip>

    <Tooltip label="Tooltip content" red>
      <Link label="Red" />
    </Tooltip>

    <Tooltip label="Tooltip content" color="white">
      <Link label="White" />
    </Tooltip>

    <Tooltip label="Tooltip content" color="black">
      <Link label="Black" />
    </Tooltip>

    <Tooltip label="Tooltip content" color="navy_op40">
      <Link label="Opacity" />
    </Tooltip>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} />
}
