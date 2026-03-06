import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { Storage } from '@neko-os/ui'

// Set a value (synchronous)
Storage.set('key', 'value')
Storage.set('settings', { darkMode: true, notifications: false })
Storage.set('items', [1, 2, 3])

// Get a value (synchronous)
const value = Storage.get('key')           // 'value'
const settings = Storage.get('settings')   // { darkMode: true, notifications: false }
const missing = Storage.get('nonexistent') // undefined

// Get with a default value
const theme = Storage.get('theme', 'light')          // 'light' if not set
const prefs = Storage.get('prefs', { sound: true })  // default object if not set

// Remove a value (synchronous)
Storage.remove('key')
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Basic API</Text>
      <Text text3>
        The synchronous API is the simplest way to use Storage. Use it when you need immediate access to stored values.
        Calling set or remove will automatically notify all components using Storage.useState with the same key.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
