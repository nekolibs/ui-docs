import { Link, Popover, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Popover, Text } from '@neko-os/ui'

<Popover content={<Text>Popover content</Text>}>
  <Text>Hover here</Text>
</Popover>
`

const CONTENT = (
  <View center fullH row gap="lg">
    <Popover
      trigger="click"
      content={
        <View>
          <Text h5 marginB="xs">
            First popover
          </Text>
          <Text sm>Popover content</Text>

          <Popover content={<Text>Second popover</Text>}>
            <Link label="Hover here" />
          </Popover>
        </View>
      }
    >
      <Link label="Click here" />
    </Popover>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Nested" code={CODE} content={CONTENT} />
}
