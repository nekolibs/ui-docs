import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const GET_SET_CODE = `
// Get the current error for a field
form.getError('email')              // 'Invalid email' or undefined

// Set a custom error on a field
form.setError('email', 'Already taken')

// Clear a specific field error
form.setError('email', null)

// Clear all errors at once
form.clearErrors()
`

const SERVER_CODE = `
// Common pattern: set server-side errors after submit
async function onSubmit(values) {
  const response = await saveUser(values)

  if (response.errors) {
    Object.entries(response.errors).forEach(([field, message]) => {
      form.setError(field, message)
    })
  }
}
`

export default function ErrorManagementSection() {
  return (
    <View gap="md">
      <Text h3>Error Management</Text>
      <Text text3>
        Manage field errors manually. Useful for server-side validation or custom error logic
        outside the built-in rules system.
      </Text>
      <CodeBlock code={GET_SET_CODE} />

      <Text h4>Server-Side Errors</Text>
      <Text text3>
        A common pattern is setting errors returned from an API after form submission.
      </Text>
      <CodeBlock code={SERVER_CODE} />
    </View>
  )
}
