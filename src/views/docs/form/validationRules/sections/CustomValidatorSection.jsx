import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { Form, FormItem, TextInput } from '@neko-os/ui'

// Custom validator function
// Throw an error to fail validation, or return/resolve to pass
<FormItem
  name="username"
  label="Username"
  rules={[
    { required: true },
    {
      validator: async (rule, value) => {
        if (value && value.includes(' ')) {
          throw new Error('Username cannot contain spaces')
        }
      }
    },
    {
      validator: async (rule, value) => {
        // Async validation (e.g. API call)
        const taken = await checkIfUsernameTaken(value)
        if (taken) throw new Error('Username is already taken')
      },
      trigger: 'onBlur'  // Only check on blur to avoid excessive API calls
    }
  ]}
>
  <TextInput />
</FormItem>
`

const PRECEDENCE_CODE = `
// When a rule has a custom validator, it runs INSTEAD of
// built-in validators for that rule. Built-in rules in
// other entries still run normally.
rules={[
  { required: true },                        // Built-in: runs first
  { validator: async (rule, value) => {} },   // Custom: runs second
  { min: 5 },                                // Built-in: runs third
]}

// Validation stops at the first error found
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Custom Validator</Text>
      <Text text3>
        Use the validator property to define custom validation logic. The function receives the rule object and the
        current value. Throw an error to fail validation. Supports async functions for server-side checks.
      </Text>
      <CodeBlock code={CODE} />

      <Text h4>Validation Order</Text>
      <Text text3>
        Rules are validated in array order. When a rule has a custom validator, it takes precedence over built-in
        validators for that rule entry. Validation stops at the first error.
      </Text>
      <CodeBlock code={PRECEDENCE_CODE} />
    </View>
  )
}
