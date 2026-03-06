import { ActiveTabContent, TabsHandler, TabsMenu, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ActiveTabContent, TabsHandler, TabsMenu, Text } from '@neko-os/ui'

const items = [
 { label: 'Profile', key: 'profile', renderContent: () => <Text>...</Text> },
 { label: 'Settings', key: 'settings', renderContent: () => <Text>...</Text> },
 { label: 'Activity', key: 'activity', renderContent: () => <Text>...</Text> },
]

<TabsHandler items={items}>
  <TabsMenu borderB />
  <ActiveTabContent />
</TabsHandler>
`

const items = [
  {
    label: 'Profile',
    key: 'profile',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" flex fullW>
        <Text>Manage your personal information and preferences.</Text>
      </View>
    ),
  },
  {
    label: 'Settings',
    key: 'settings',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" flex fullW>
        <Text>Configure your app behavior and notifications.</Text>
      </View>
    ),
  },
  {
    label: 'Activity',
    key: 'activity',
    renderContent: () => (
      <View bg="overlayBG" br="lg" padding="md" flex fullW>
        <Text>View your recent actions and history.</Text>
      </View>
    ),
  },
]

const CONTENT = (
  <View fullW flex>
    <TabsHandler items={items}>
      <TabsMenu borderB />
      <ActiveTabContent />
    </TabsHandler>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
