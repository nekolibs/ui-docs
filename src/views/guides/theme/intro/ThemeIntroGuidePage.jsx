import { Text, View } from '@neko-os/ui'

import SetupSection from './sections/SetupSection'
import ThemeStructureSection from './sections/ThemeStructureSection'
import UseThemeSection from './sections/UseThemeSection'
import SpacesSection from './sections/SpacesSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Theme</Text>

      <SetupSection />
      <ThemeStructureSection />
      <UseThemeSection />
      <SpacesSection />
    </View>
  )
}
