import { Text, View } from '@neko-os/ui'

import HideOnSample from './samples/HideOnSample'
import ShowOnSample from './samples/ShowOnSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <Text h1>ResponsiveRender</Text>

      <HideOnSample />
      <ShowOnSample />
    </View>
  )
}
