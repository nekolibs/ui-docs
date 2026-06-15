import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View gap="sm">
        <Text h1>ReturnButton</Text>
        <Text text3>
          The Button version of ReturnLink. Same behavior — a left-arrow that calls navigation goBack
          (react-navigation on native, react-router on plain web) — but rendered as a Button using its
          `icon` prop, so no Icon children. Use `close` for a close icon, `icon` for any icon name, or
          `onPress` to override. Extra props pass to the Button (`label`, `outline`, size, color, …).
        </Text>
      </View>

      <BasicUsageSample />
    </View>
  )
}
