import { Button, Upload, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Upload, Button } from '@neko-os/ui'

<Upload disabled>
  {({ open }) => <Button outline disabled label="Disabled" onPress={open} />}
</Upload>
`

const CONTENT = (
  <View row gap="md" flex center>
    <Upload disabled>
      {({ open }) => <Button outline disabled prefixIcon="upload-2-line" label="Disabled" onPress={open} />}
    </Upload>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="State" code={CODE} content={CONTENT} />
}
