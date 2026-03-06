import { Image, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Image } from '@neko-os/ui'

<Image src="..." width={120} />
<Image src="..." ratio={1} width={120} />
`

const CONTENT = (
  <View row gap={10} flex center>
    <Image src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" width={120} />
    <Image src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" ratio={1} width={120} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
