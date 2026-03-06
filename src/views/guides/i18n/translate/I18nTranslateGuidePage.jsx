import { Text, View } from '@neko-os/ui'

import ContextSection from './sections/ContextSection'
import InterpolationSection from './sections/InterpolationSection'
import NamespaceSection from './sections/NamespaceSection'
import NestedSection from './sections/NestedSection'
import PluralSection from './sections/PluralSection'
import UseTranslationSection from './sections/UseTranslationSection'

export default function Page() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Translate Function</Text>

      <UseTranslationSection />
      <NamespaceSection />
      <NestedSection />
      <InterpolationSection />
      <ContextSection />
      <PluralSection />
    </View>
  )
}
