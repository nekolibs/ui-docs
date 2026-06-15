import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View gap="sm">
        <Text h1>ReturnLink</Text>
        <Text text3>
          A back / close Link — a Link wrapping an Icon. By default it renders a left-arrow that calls
          navigation goBack: react-navigation on native, react-router (navigate(-1)) on plain web. Use
          `close` for a close icon, `icon` for any icon name, or `onPress` to override the action. Any
          extra props pass through to the Icon (size, color, …).
        </Text>
      </View>

      <BasicUsageSample />
    </View>
  )
}
