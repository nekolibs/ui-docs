import { Button, Icon, Link, Text, Upload, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Upload, Button, Icon, Text, Link } from '@neko-os/ui'

<Upload>
  {({ value, remove, open }) => (
    <View gap="md">
      <Button outline prefixIcon="upload-2-line" label="Upload File" onPress={open} />

      {value && (
        <View row gap="sm" centerV>
          <Icon name="file-line" size="sm" />
          <Text text3 flex>{value.name}</Text>
          <Link label="Remove" red onPress={() => remove(value)} />
        </View>
      )}
    </View>
  )}
</Upload>
`

const CONTENT = (
  <Upload>
    {({ value, remove, open }) => (
      <View gap="md" flex centerV>
        <Button outline prefixIcon="upload-2-line" label="Upload File" onPress={open} />

        {value && (
          <View row gap="sm" centerV>
            <Icon name="file-line" size="sm" />
            <Text text3 flex>{value.name}</Text>
            <Link label="Remove" red onPress={() => remove(value)} />
          </View>
        )}
      </View>
    )}
  </Upload>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
