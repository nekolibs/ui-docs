import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const VALIDATE_FIELD_CODE = `
// Validate a single field against its registered rules
const error = await form.validateField('email', 'onBlur')

// Returns the error message string, or null if valid
`

const VALIDATE_FIELDS_CODE = `
// Validate all fields. Resolves with values or rejects with errors.
try {
  const values = await form.validateFields()
  // All fields valid, values is the form data
  await saveData(values)
} catch (errors) {
  // errors is an object: { fieldName: 'error message', ... }
  console.log('Validation failed:', errors)
}
`

export default function ValidationSection() {
  return (
    <View gap="md">
      <Text h3>Programmatic Validation</Text>
      <Text text3>
        Trigger validation manually without submitting the form. Both methods run
        the rules registered by FormItem components.
      </Text>

      <Text h4>Single Field</Text>
      <CodeBlock code={VALIDATE_FIELD_CODE} />

      <Text h4>All Fields</Text>
      <Text text3>
        validateFields returns a promise that resolves with form values if valid,
        or rejects with the errors object.
      </Text>
      <CodeBlock code={VALIDATE_FIELDS_CODE} />
    </View>
  )
}
