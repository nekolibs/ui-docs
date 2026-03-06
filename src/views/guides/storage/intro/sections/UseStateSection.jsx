import { Text, View } from '@neko-os/ui'

import CodeBlock from '../../../../../components/code/CodeBlock'

const CODE = `
import { Storage } from '@neko-os/ui'

function Settings() {
  // Works like useState but persists to storage
  const [theme, setTheme] = Storage.useState('theme', 'light')
  const [notifications, setNotifications] = Storage.useState('notifications', true)

  return (
    <View>
      <Switch
        value={theme === 'dark'}
        onChange={(isDark) => setTheme(isDark ? 'dark' : 'light')}
      />
      <Switch
        value={notifications}
        onChange={setNotifications}
      />
    </View>
  )
}

// The value is:
// 1. Read from storage on mount (or uses default if not found)
// 2. Automatically saved to storage when changed
// 3. Persisted across app restarts
// 4. Synced across all components using the same key via pub/sub
`

const SYNC_CODE = `
import { Storage } from '@neko-os/ui'

// Both components share the same storage key.
// When one updates the value, the other re-renders automatically.

function ThemeToggle() {
  const [theme, setTheme] = Storage.useState('theme', 'light')
  return <Switch value={theme === 'dark'} onChange={(v) => setTheme(v ? 'dark' : 'light')} />
}

function ThemeLabel() {
  const [theme] = Storage.useState('theme', 'light')
  return <Text>Current theme: {theme}</Text>
}
`

export default function Section() {
  return (
    <View gap="md">
      <Text h3>Storage.useState Hook</Text>
      <Text text3>
        The useState hook combines React state with storage persistence. Changes are automatically saved, and the value
        is restored on next mount.
      </Text>
      <CodeBlock code={CODE} />

      <Text h3>Cross-Component Sync</Text>
      <Text text3>
        Storage uses a built-in pub/sub system under the hood. When any component calls the setter from
        Storage.useState, all other components subscribed to the same key are automatically updated. This means you can
        use Storage.useState as a simple shared state solution without any extra setup.
      </Text>
      <CodeBlock code={SYNC_CODE} />
    </View>
  )
}
