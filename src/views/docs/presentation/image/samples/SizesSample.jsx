import { Image, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Image } from '@neko-os/ui'

<Image src="..." width={120} ratio={1} />
<Image src="..." height={120} width={180} />
<Image src="..." height={180} width={120} />
`

const CONTENT = (
  <View row gap={10} flex center wrap>
    <Image src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" width={120} ratio={1} />
    <Image src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" height={120} width={180} />
    <Image src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" height={180} width={120} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Size" code={CODE} content={CONTENT} />
}
