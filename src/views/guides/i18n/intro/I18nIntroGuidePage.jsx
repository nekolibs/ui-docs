import { Text, View } from '@neko-os/ui'

import ChangeLanguageSection from './sections/ChangeLanguageSection'
import ExpoDeviceLanguageSection from './sections/ExpoDeviceLanguageSection'
import OutsideComponentSection from './sections/OutsideComponentSection'
import SetupSection from './sections/SetupSection'
import StorageSection from './sections/StorageSection'
import UseTranslationSection from './sections/UseTranslationSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>I18n Intro</Text>

      <SetupSection />
      <StorageSection />
      <ExpoDeviceLanguageSection />
      <UseTranslationSection />
      <ChangeLanguageSection />
      <OutsideComponentSection />
    </View>
  )
}
