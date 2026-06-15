import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View gap="sm">
        <Text h1>RoutedStepsContent</Text>
        <Text text3>
          A drop-in replacement for ActiveStepContent that renders each step as its own screen in a
          self-contained react-navigation native stack — real native push/pop transitions, swipe back,
          and hardware back. It adds no state of its own: StepsHandler stays the single source of truth,
          so StepsMenu, StepsNavigation and useSteps work unchanged around it. Compose it inside a
          StepsHandler with whatever fixed chrome you want (a TopBar, a menu, a footer).
        </Text>
        <Text text3>
          This is native-only. On plain web (like this docs site) it falls back to in-place rendering,
          so the sample below works as a normal stepper — just without the native screen transitions.
        </Text>
      </View>

      <BasicUsageSample />
    </View>
  )
}
