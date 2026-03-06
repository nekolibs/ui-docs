import { Text, View } from '@neko-os/ui'

import InstallSection from './sections/InstallSection'
import PeerDependenciesSection from './sections/PeerDependenciesSection'
import SetupSection from './sections/SetupSection'
import BasicUsageSection from './sections/BasicUsageSection'

export default function InstallGuidePage() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Installation & Setup</Text>

      <InstallSection />
      <PeerDependenciesSection />
      <SetupSection />
      <BasicUsageSection />
    </View>
  )
}
