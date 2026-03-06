import { Text, View } from '@neko-os/ui'

import IntroSection from './sections/IntroSection'
import BasicApiSection from './sections/BasicApiSection'
import AsyncApiSection from './sections/AsyncApiSection'
import UseStateSection from './sections/UseStateSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Storage</Text>

      <IntroSection />
      <BasicApiSection />
      <AsyncApiSection />
      <UseStateSection />
    </View>
  )
}
