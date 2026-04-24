import { Icon, Link, Text, Upload, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Upload, View, Icon, Text, Link } from '@neko-os/ui'

<Upload>
  {({ value, remove, isDragging, open }) => (
    <View gap="md">
      <View
        border
        borderStyle="dashed"
        br="md"
        padding="xl"
        center
        gap="sm"
        bg={isDragging ? 'primary_op10' : 'transparent'}
        onPress={open}
        pointer
      >
        <Icon name="upload-cloud-2-line" size="lg" />
        <Text text3>
          {isDragging ? 'Drop file here' : 'Drag & drop or click to upload'}
        </Text>
      </View>

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
    {({ value, remove, isDragging, open }) => (
      <View gap="md" flex>
        <View
          border
          borderStyle="dashed"
          br="md"
          padding="xl"
          center
          gap="sm"
          bg={isDragging ? 'primary_op10' : 'transparent'}
          onPress={open}
          pointer
        >
          <Icon name="upload-cloud-2-line" size="lg" />
          <Text text3>{isDragging ? 'Drop file here' : 'Drag & drop or click to upload'}</Text>
        </View>

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
  return <SampleCodeBlock title="Drag & Drop" code={CODE} content={CONTENT} />
}
