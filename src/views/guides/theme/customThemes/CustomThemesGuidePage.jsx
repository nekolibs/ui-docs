import { Text, View } from '@neko-os/ui'

import AvailableThemesSection from './sections/AvailableThemesSection'
import ExtendThemeSection from './sections/ExtendThemeSection'
import CreateThemeSection from './sections/CreateThemeSection'
import RegisterThemesSection from './sections/RegisterThemesSection'
import GlobalOverridesSection from './sections/GlobalOverridesSection'
import ComponentDefaultsSection from './sections/ComponentDefaultsSection'
import OverlayDividerSection from './sections/OverlayDividerSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Custom Themes</Text>

      <AvailableThemesSection />
      <ExtendThemeSection />
      <CreateThemeSection />
      <RegisterThemesSection />
      <GlobalOverridesSection />
      <ComponentDefaultsSection />
      <OverlayDividerSection />
    </View>
  )
}
