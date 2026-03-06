import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { Storage } from '@neko-os/ui'

// Storage works on both web and mobile:
// - Web: uses localStorage
// - Mobile: uses expo-sqlite/kv-store

// Values are automatically JSON serialized/deserialized
Storage.set('user', { name: 'John', age: 30 })
const user = Storage.get('user')  // { name: 'John', age: 30 }

// Built-in pub/sub: when a value changes, all
// components using Storage.useState for that key
// are automatically updated
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Introduction</Text>
      <Text text3>
        Storage provides a unified API for persisting data on both web and mobile. Values are automatically JSON
        serialized when saving and deserialized when reading. It includes a built-in pub/sub system that automatically
        syncs state across all components subscribed to the same key.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
