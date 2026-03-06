import { Text, View } from '@neko-os/ui'

import RuleFormatsSection from './sections/RuleFormatsSection'
import BuiltInRulesSection from './sections/BuiltInRulesSection'
import CustomValidatorSection from './sections/CustomValidatorSection'
import TriggersSection from './sections/TriggersSection'
import MessagesSection from './sections/MessagesSection'

export default function DocPage() {
  return (
    <View flex gap={45} maxWidth={1200}>
      <Text h1>Validation Rules</Text>

      <RuleFormatsSection />
      <BuiltInRulesSection />
      <CustomValidatorSection />
      <TriggersSection />
      <MessagesSection />
    </View>
  )
}
