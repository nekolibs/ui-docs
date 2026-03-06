import { Icon, Text, View } from '@neko-os/ui'

export default function ExamplesPage() {
  return (
    <View flex center bg="mainBG" gap="md">
      <Icon name="code-box-line" primary size="xxxl" />
      <Text h2>Coming Soon</Text>
      <Text text3 center maxW={400}>
        Full app examples and templates are on the way. Stay tuned!
      </Text>
    </View>
  )
}
