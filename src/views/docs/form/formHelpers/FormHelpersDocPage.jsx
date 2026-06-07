import { Text, View } from '@neko-os/ui'

import TouchedDirtySection from './sections/TouchedDirtySection'
import ResetSection from './sections/ResetSection'
import ValuesSection from './sections/ValuesSection'
import ErrorManagementSection from './sections/ErrorManagementSection'
import ValidationSection from './sections/ValidationSection'

export default function DocPage() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Form Helpers</Text>

      <TouchedDirtySection />
      <ValuesSection />
      <ErrorManagementSection />
      <ValidationSection />
      <ResetSection />
    </View>
  )
}
