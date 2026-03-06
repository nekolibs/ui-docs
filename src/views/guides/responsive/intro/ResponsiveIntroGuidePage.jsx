import { Text, View } from '@neko-os/ui'

import BreakpointsSection from './sections/BreakpointsSection'
import UseResponsiveSection from './sections/UseResponsiveSection'
import ResponsiveValuesSection from './sections/ResponsiveValuesSection'
import UpDownModifiersSection from './sections/UpDownModifiersSection'
import PlatformValuesSection from './sections/PlatformValuesSection'
import ShowHideSection from './sections/ShowHideSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Responsiveness</Text>

      <BreakpointsSection />
      <UseResponsiveSection />
      <ResponsiveValuesSection />
      <UpDownModifiersSection />
      <PlatformValuesSection />
      <ShowHideSection />
    </View>
  )
}
