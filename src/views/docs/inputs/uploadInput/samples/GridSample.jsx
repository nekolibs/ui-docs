import { UploadInput, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { UploadInput } from '@neko-os/ui'

<UploadInput grid accept="image/*" />
<UploadInput grid multiple maxCount={5} accept="image/*" />
`

const CONTENT = (
  <View gap="md" flex centerV>
    <UploadInput grid />
    <UploadInput grid multiple maxCount={5} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Grid" code={CODE} content={CONTENT} />
}
