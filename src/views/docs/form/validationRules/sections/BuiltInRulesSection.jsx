import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const REQUIRED_CODE = `
// Validates that the field is not empty
// Works on strings, arrays, and any value (null/undefined)
rules={[{ required: true }]}

// Empty string, null, undefined, and empty arrays are all considered empty
// Default message: "This field is required"
`

const TYPE_CODE = `
// Validates the value matches a specific type
// Skips validation if the value is empty

// Email - must match a valid email pattern
rules={[{ type: 'email' }]}
// Default message: "Please enter a valid email address"

// URL - must be a valid URL
rules={[{ type: 'url' }]}
// Default message: "Please enter a valid URL"

// Number - must be a valid number
rules={[{ type: 'number' }]}
// Default message: "Please enter a valid number"

// Integer - must be a valid integer (no decimals)
rules={[{ type: 'integer' }]}
// Default message: "Please enter a valid integer"
`

const MIN_MAX_CODE = `
// min and max adapt to the value type automatically
// Skips validation if the value is empty

// String: validates character count
rules={[{ min: 2, max: 100 }]}
// "Must be at least 2 characters" / "Must be at most 100 characters"

// Number: validates numeric value
rules={[{ min: 0, max: 999 }]}
// "Must be at least 0" / "Must be at most 999"

// Array: validates item count (useful with FormList)
rules={[{ min: 1, max: 5 }]}
// "Must have at least 1 items" / "Must have at most 5 items"
`

const PATTERN_CODE = `
// Validates the value against a regular expression
// Accepts a RegExp object or a string pattern
// Skips validation if the value is empty

// RegExp object
rules={[{ pattern: /^[A-Z]/, message: 'Must start with uppercase' }]}

// String pattern
rules={[{ pattern: '^[0-9]+$', message: 'Numbers only' }]}

// Default message: "Invalid format"
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Built-in Rules</Text>

      <Text h4>required</Text>
      <Text text3>
        Validates that the field has a value. Empty strings, null, undefined, and empty arrays are all considered empty.
      </Text>
      <CodeBlock code={REQUIRED_CODE} />

      <Text h4>type</Text>
      <Text text3>
        Validates the value matches a specific format. Supports email, url, number, and integer. Skips validation if the
        value is empty.
      </Text>
      <CodeBlock code={TYPE_CODE} />

      <Text h4>min / max</Text>
      <Text text3>
        Validates minimum and maximum constraints. Automatically adapts based on the value type: character count for
        strings, numeric value for numbers, and item count for arrays.
      </Text>
      <CodeBlock code={MIN_MAX_CODE} />

      <Text h4>pattern</Text>
      <Text text3>
        Validates the value against a regular expression. Accepts a RegExp object or a string pattern.
      </Text>
      <CodeBlock code={PATTERN_CODE} />
    </View>
  )
}
