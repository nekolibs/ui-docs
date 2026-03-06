import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const DEFAULTS_CODE = `
// Each built-in rule has a default error message:

// required
"This field is required"

// type
"Please enter a valid email address"   // type: 'email'
"Please enter a valid URL"             // type: 'url'
"Please enter a valid number"          // type: 'number'
"Please enter a valid integer"         // type: 'integer'

// min (adapts to value type)
"Must be at least {min} characters"    // string
"Must be at least {min}"               // number
"Must have at least {min} items"       // array

// max (adapts to value type)
"Must be at most {max} characters"     // string
"Must be at most {max}"                // number
"Must have at most {max} items"        // array

// pattern
"Invalid format"
`

const CUSTOM_CODE = `
// Override the default message with the message property
rules={[
  { required: true, message: 'Please fill in this field' },
  { type: 'email', message: 'That doesn\\'t look like an email' },
  { min: 3, message: 'Too short!' },
  { pattern: /^[A-Z]/, message: 'Start with a capital letter' },
]}

// Custom validators use the thrown error message
rules={[
  {
    validator: async (rule, value) => {
      if (value === 'admin') throw new Error('Reserved username')
    }
  }
]}
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Error Messages</Text>

      <Text h4>Default Messages</Text>
      <Text text3>
        Every built-in rule provides a default error message. The min and max messages automatically adapt based on
        whether the value is a string, number, or array.
      </Text>
      <CodeBlock code={DEFAULTS_CODE} />

      <Text h4>Custom Messages</Text>
      <Text text3>
        Override the default message by adding a message property to any rule. For custom validators, the message comes
        from the thrown error.
      </Text>
      <CodeBlock code={CUSTOM_CODE} />
    </View>
  )
}
