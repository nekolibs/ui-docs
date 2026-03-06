import { Card, StatePresenter, Text } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { StatePresenter } from '@neko-os/ui'

<StatePresenter error={{ message: 'Failed to load data' }}>
  <Text>Content</Text>
</StatePresenter>
`

const CONTENT = (
  <Card height={200}>
    <StatePresenter error={{ message: 'Failed to load data' }}>
      <Text>Content</Text>
    </StatePresenter>
  </Card>
)

export default function ErrorStateSample() {
  return <SampleCodeBlock title="Error State" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} />
}
