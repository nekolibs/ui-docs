import { Text, View } from '@neko-os/ui'

import ChangeThemeSection from './sections/ChangeThemeSection'
import PersistingThemeSection from './sections/PersistingThemeSection'
import UseThemeHandlerSection from './sections/UseThemeHandlerSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Changing Theme</Text>

      <UseThemeHandlerSection />
      <ChangeThemeSection />
      <PersistingThemeSection />
    </View>
  )
}
