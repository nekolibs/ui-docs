import { UploadInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { UploadInput } from '@neko-os/ui'

<UploadInput area placeholder="Drop any file here" />
<UploadInput area placeholder="Drop images here" accept="image/*" />
<UploadInput area placeholder="Drop up to 3 files" multiple maxCount={3} />
`

const CONTENT = (
  <View gap="md" flex centerV>
    <UploadInput area placeholder="Drop any file here" />
    <UploadInput area placeholder="Drop images here" accept="image/*" />
    <UploadInput area placeholder="Drop up to 3 files" multiple maxCount={3} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Area" code={CODE} content={CONTENT} />
}
