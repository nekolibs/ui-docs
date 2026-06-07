import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const GET_CODE = `
const form = useNewForm({ initialValues: { name: 'John', role: 'admin' } })

// Get a single field value
form.getFieldValue('name')          // 'John'

// Get all values as an object
form.getFieldsValue()               // { name: 'John', role: 'admin' }
`

const SET_CODE = `
// Set multiple field values at once
form.setFieldsValue({ name: 'Jane', role: 'editor' })

// Notifies all listeners and triggers onValuesChange
`

export default function ValuesSection() {
  return (
    <View gap="md">
      <Text h3>Values</Text>

      <Text h4>Reading Values</Text>
      <Text text3>
        Read field values programmatically. For reactive updates, use useWatch instead.
      </Text>
      <CodeBlock code={GET_CODE} />

      <Text h4>Setting Multiple Values</Text>
      <Text text3>
        Set multiple field values in a single call. All listeners are notified after the update.
      </Text>
      <CodeBlock code={SET_CODE} />
    </View>
  )
}
