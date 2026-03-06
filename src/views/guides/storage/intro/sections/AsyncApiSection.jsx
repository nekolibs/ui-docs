import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { Storage } from '@neko-os/ui'

// Async set
await Storage.setAsync('key', 'value')

// Async get
const value = await Storage.getAsync('key')

// Async get with default value
const theme = await Storage.getAsync('theme', 'light')

// Async remove
await Storage.removeAsync('key')

// Useful in useEffect or async functions
useEffect(() => {
  Storage.getAsync('userPreferences').then((prefs) => {
    if (prefs) setPreferences(prefs)
  })
}, [])
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Async API</Text>
      <Text text3>
        The async API returns Promises, useful when you want non-blocking operations or need to use await syntax.
        Like the sync API, subscribers are notified once the value has been persisted.
      </Text>
      <CodeBlock code={CODE} />
    </View>
  )
}
