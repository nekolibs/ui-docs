import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
const form = useNewForm({ initialValues: { name: 'John', email: 'john@mail.com' } })

// Reset all values to initialValues, clear errors, touched, and dirty state
form.resetFields()
`

export default function ResetSection() {
  return (
    <View gap="md">
      <Text h3>Reset</Text>
      <Text text3>
        Resets the form back to its initial state. Restores all field values to initialValues,
        clears all validation errors, and clears touched and dirty tracking.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
