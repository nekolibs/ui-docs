import { Button, IconLabel, VerticalView, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Button, IconLabel, VerticalView, View } from '@neko-os/ui'

<VerticalView height={300} width={50}>
  <View flex row gap="sm" center>
    <IconLabel icon="home-smile-line" label="Icon Label" center strong />
    <Button label="Action" sm outline />
  </View>
</VerticalView>
`

const CONTENT = (
  <View row gap={15} flex center>
    <VerticalView height={300} width={50}>
      <View flex row gap="sm" center>
        <IconLabel icon="home-smile-line" label="Icon Label" center strong />
        <Button label="Action" sm outline />
      </View>
    </VerticalView>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
