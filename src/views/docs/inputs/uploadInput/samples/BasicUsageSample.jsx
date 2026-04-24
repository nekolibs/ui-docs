import { UploadInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { UploadInput } from '@neko-os/ui'

<UploadInput placeholder="Any file" />
<UploadInput placeholder="Images only" accept="image/*" />
<UploadInput placeholder="Up to 3 files" multiple maxCount={3} />
`

const CONTENT = (
  <View gap="md" flex centerV>
    <UploadInput placeholder="Any file" />
    <UploadInput placeholder="Images only" accept="image/*" />
    <UploadInput placeholder="Up to 3 files" multiple maxCount={3} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
