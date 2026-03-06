import { Card, StatePresenter, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { StatePresenter } from '@neko-os/ui'

<StatePresenter
  error={{ message: 'Network error' }}
  errorTitle="Connection Failed"
  errorDescription="Please check your internet connection and try again."
>
  <Text>Content</Text>
</StatePresenter>

<StatePresenter
  empty
  emptyTitle="No Items Found"
  emptyDescription="Try adjusting your search filters."
>
  <Text>Content</Text>
</StatePresenter>
`

const CONTENT = (
  <View gap="lg" fullW>
    <Card height={200} center>
      <StatePresenter
        error={{ message: 'Network error' }}
        errorTitle="Connection Failed"
        errorDescription="Please check your internet connection and try again."
      >
        <Text>Content</Text>
      </StatePresenter>
    </Card>
    <Card height={200} center>
      <StatePresenter empty emptyTitle="No Items Found" emptyDescription="Try adjusting your search filters.">
        <Text>Content</Text>
      </StatePresenter>
    </Card>
  </View>
)

export default function CustomMessagesSample() {
  return <SampleCodeBlock title="Custom Messages" code={CODE} content={CONTENT} bg="transparent" padding={0} border={0} />
}
