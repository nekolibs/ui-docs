import { ImageBackground, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ImageBackground, View, Text } from '@neko-os/ui'

<ImageBackground
  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
  fullW
  height={400}
  center
  br="md"
>
  <View padding="md" br="md" bg="mainBG_op70">
    <Text>Content inside image</Text>
  </View>
</ImageBackground>
`

const CONTENT = (
  <View row gap={10} flex center>
    <ImageBackground
      src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
      fullW
      height={400}
      center
      br="md"
    >
      <View padding="md" br="md" bg="mainBG_op70">
        <Text>Content inside image</Text>
      </View>
    </ImageBackground>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
