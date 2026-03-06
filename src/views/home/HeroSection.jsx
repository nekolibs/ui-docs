import { Button, Text, View } from '@neko-os/ui'
import { useNavigate } from 'react-router'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <View minH="70vh" center fullW borderB bg="overlayBG">
      <View maxW={1100} center gap="xxxl" paddingV="xl" marginH="auto" fullW>
        <View center gap="lg" paddingV="xl">
          <View center>
            <Text h4 primary center strong>
              NekoUI
            </Text>
            <Text h1 center text2>
              A cross-platform UI library for Web and React Native
            </Text>
          </View>
          <Text text2 center text3 maxW={500}>
            Build beautiful interfaces using modifier-based styling. No CSS files, no style objects — just clean,
            readable props.
          </Text>
          <View row gap="md" center marginT="md">
            <Button label="Get Started" primary onPress={() => navigate('/guides/install')} />
            <Button label="Components" outline onPress={() => navigate('/docs/view')} />
          </View>
        </View>
      </View>
    </View>
  )
}
