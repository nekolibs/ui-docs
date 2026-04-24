import { UploadInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { UploadInput } from '@neko-os/ui'

<UploadInput placeholder="Up to 5 files" multiple maxCount={5} />
<UploadInput area placeholder="Drop up to 3 images" multiple maxCount={3} accept="image/*" />
`

const CONTENT = (
  <View gap="md" flex centerV>
    <UploadInput placeholder="Up to 5 files" multiple maxCount={5} />
    <UploadInput area placeholder="Drop up to 3 images" multiple maxCount={3} accept="image/*" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Multiple" code={CODE} content={CONTENT} />
}
