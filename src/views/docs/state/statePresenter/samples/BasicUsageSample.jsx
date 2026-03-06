import { Card, StatePresenter, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { StatePresenter } from '@neko-os/ui'

<StatePresenter loading>
  <Text>Content</Text>
</StatePresenter>

<StatePresenter loading={false}>
  <Text>Content is visible</Text>
</StatePresenter>
`

const CONTENT = (
  <View gap="lg" fullW>
    <Card height={150} center>
      <StatePresenter loading>
        <Text>Content</Text>
      </StatePresenter>
    </Card>
    <Card height={150} center>
      <StatePresenter loading={false}>
        <Text>Content is visible</Text>
      </StatePresenter>
    </Card>
  </View>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Loading State" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} />
}
