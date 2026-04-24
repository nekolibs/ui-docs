import { Button, Icon, Link, Text, Upload, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Upload, Button, Icon, Text, Link } from '@neko-os/ui'

<Upload multiple maxCount={3}>
  {({ value, remove, open }) => (
    <View gap="md">
      <Button outline prefixIcon="upload-2-line" label="Max 3 Files" onPress={open} />

      {value.length > 0 && (
        <View gap="xs">
          {value.map(file => (
            <View row gap="sm" centerV key={file._id}>
              <Icon name="file-line" size="sm" />
              <Text text3 flex>{file.name}</Text>
              <Link label="Remove" red onPress={() => remove(file)} />
            </View>
          ))}
        </View>
      )}
    </View>
  )}
</Upload>
`

const CONTENT = (
  <Upload multiple maxCount={3}>
    {({ value, remove, open }) => (
      <View gap="md" flex centerV>
        <Button outline prefixIcon="upload-2-line" label="Max 3 Files" onPress={open} />

        {value.length > 0 && (
          <View gap="xs">
            {value.map((file) => (
              <View row gap="sm" centerV key={file._id}>
                <Icon name="file-line" size="sm" />
                <Text text3 flex>{file.name}</Text>
                <Link label="Remove" red onPress={() => remove(file)} />
              </View>
            ))}
          </View>
        )}
      </View>
    )}
  </Upload>
)

export default function Sample() {
  return <SampleCodeBlock title="Multiple" code={CODE} content={CONTENT} />
}
