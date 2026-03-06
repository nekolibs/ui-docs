import { Image, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Image } from '@neko-os/ui'

<Image src="..." width={120} ratio={1} br={3} />
<Image src="..." width={120} ratio={1} br="sm" />
<Image src="..." width={120} ratio={1} br="xxxl" />
<Image src="..." width={120} ratio={1} round />
`

const CONTENT = (
  <View row gap={10} flex center wrap>
    <Image src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" width={120} ratio={1} br={3} />
    <Image src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" width={120} ratio={1} br="sm" />
    <Image src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" width={120} ratio={1} br="xxxl" />
    <Image src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" width={120} ratio={1} round />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Shapes" code={CODE} content={CONTENT} />
}
