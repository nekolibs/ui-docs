import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const ARRAY_CODE = `
import { Form, FormItem, TextInput } from '@neko-os/ui'

// Array format gives full control over each rule
<FormItem
  name="email"
  label="Email"
  rules={[
    { required: true },
    { type: 'email', message: 'Invalid email' },
    { min: 5 },
    { max: 100 },
    { pattern: /^[a-z]/, message: 'Must start with lowercase' },
  ]}
>
  <TextInput />
</FormItem>
`

const OBJECT_CODE = `
// Object shorthand for simple cases
<FormItem
  name="name"
  label="Name"
  rules={{ required: true, min: 2, max: 50 }}
>
  <TextInput />
</FormItem>

// The object shorthand above is equivalent to:
// rules={[{ required: true }, { min: 2 }, { max: 50 }]}
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Rule Formats</Text>
      <Text text3>
        Rules can be passed as an array of rule objects for full control, or as an object shorthand for simple cases.
      </Text>

      <Text h4>Array Format</Text>
      <Text text3>
        Each entry in the array is a separate rule object. This lets you set custom messages and triggers per rule.
      </Text>
      <CodeBlock code={ARRAY_CODE} />

      <Text h4>Object Shorthand</Text>
      <Text text3>
        When you don't need per-rule messages or triggers, pass rules as a single object. Each key becomes its own rule.
      </Text>
      <CodeBlock code={OBJECT_CODE} />
    </View>
  )
}
