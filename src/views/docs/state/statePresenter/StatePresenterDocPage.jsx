import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import ErrorStateSample from './samples/ErrorStateSample'
import EmptyStateSample from './samples/EmptyStateSample'
import CustomMessagesSample from './samples/CustomMessagesSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>StatePresenter</Text>
        <Text text3 maxWidth={800}>
          A utility component that handles loading, error, and empty states. Renders the appropriate feedback UI based
          on the current state, or renders children when no state is active.
        </Text>
      </View>

      <BasicUsageSample />
      <ErrorStateSample />
      <EmptyStateSample />
      <CustomMessagesSample />
    </View>
  )
}
