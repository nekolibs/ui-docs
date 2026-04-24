import { Button, Icon, Link, Text, Upload, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Upload, Button, Icon, Text, Link } from '@neko-os/ui'

// onUpload receives a file and must return a Promise
// The resolved value is merged into the file object
const handleUpload = (file) => {
  return fetch('/api/upload', {
    method: 'POST',
    body: file.file,
  })
    .then(res => res.json())
    .then(data => ({ url: data.url }))
}

<Upload onUpload={handleUpload}>
  {({ value, remove, open }) => (
    <View gap="md">
      <Button outline prefixIcon="upload-2-line" label="Upload File" onPress={open} />

      {value && (
        <View row gap="sm" centerV>
          <Icon name="file-line" size="sm" />
          <Text text3 flex>{value.name}</Text>
          <Text text4 muted>{value.status}</Text>
          {value.status === 'done' && (
            <Link label="Remove" red onPress={() => remove(value)} />
          )}
        </View>
      )}
    </View>
  )}
</Upload>
`

const fakeUpload = (file) =>
  new Promise((resolve) => setTimeout(() => resolve({ url: 'https://example.com/' + file.name }), 1000))

const CONTENT = (
  <Upload onUpload={fakeUpload}>
    {({ value, remove, open }) => (
      <View gap="md" flex centerV>
        <Button outline prefixIcon="upload-2-line" label="Upload File" onPress={open} />

        {value && (
          <View row gap="sm" centerV>
            <Icon name="file-line" size="sm" />
            <Text text3 flex>{value.name}</Text>
            <Text text4 muted>{value.status}</Text>
            {value.status === 'done' && <Link label="Remove" red onPress={() => remove(value)} />}
          </View>
        )}
      </View>
    )}
  </Upload>
)

export default function Sample() {
  return <SampleCodeBlock title="onUpload" code={CODE} content={CONTENT} />
}
