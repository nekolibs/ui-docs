import { BlurView, GradientView, ImageBackground, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { BlurView } from '@neko-os/ui'

<BlurView intensity={80}>...</BlurView>
<BlurView intensity={20}>...</BlurView>
<BlurView tint="prominent">...</BlurView>
<BlurView tint="extraLight">...</BlurView>
<BlurView disabledForAndroid>...</BlurView>
`

const CONTENT = (
  <View gap="md" row>
    <ImageBackground src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" br="lg" padding="md" flex>
      <BlurView height={500} intensity={80} br="md" center>
        <Text>Content</Text>
      </BlurView>
    </ImageBackground>

    <GradientView colors={['green', 'orange', 'blue']} br="lg" padding="md" flex>
      <BlurView height={500} intensity={80} br="md" center>
        <Text>Content</Text>
      </BlurView>
    </GradientView>
  </View>
)

export default function BasicUsageSample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} padding={0} bg="transparent" />
}
