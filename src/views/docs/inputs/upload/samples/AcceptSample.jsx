import { Button, Upload, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Upload, Button } from '@neko-os/ui'

// Accept only images
<Upload accept="image/*">
  {({ open }) => <Button outline label="Images Only" onPress={open} />}
</Upload>

// Accept specific types
<Upload accept="image/png,image/jpeg">
  {({ open }) => <Button outline label="PNG or JPEG" onPress={open} />}
</Upload>

// Accept PDFs
<Upload accept="application/pdf">
  {({ open }) => <Button outline label="PDF Only" onPress={open} />}
</Upload>
`

const CONTENT = (
  <View row gap="md" flex center>
    <Upload accept="image/*">
      {({ open }) => <Button outline prefixIcon="image-line" label="Images Only" onPress={open} />}
    </Upload>

    <Upload accept="image/png,image/jpeg">
      {({ open }) => <Button outline prefixIcon="image-line" label="PNG or JPEG" onPress={open} />}
    </Upload>

    <Upload accept="application/pdf">
      {({ open }) => <Button outline prefixIcon="file-pdf-2-line" label="PDF Only" onPress={open} />}
    </Upload>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Accept" code={CODE} content={CONTENT} />
}
