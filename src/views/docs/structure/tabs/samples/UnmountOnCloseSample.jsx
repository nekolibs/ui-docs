import { ActiveTabContent, Loading, TabsHandler, TabsMenu, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ActiveTabContent, TabsHandler, TabsMenu, Text } from '@neko-os/ui'

const items = [...]

<TabsHandler items={items}>
  <TabsMenu borderB />
  <ActiveTabContent lazy unmountOnClose />
</TabsHandler>
`

function Item({ text }) {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <View bg="overlayBG" br="lg" padding="md" flex fullW>
      {loading ? <Loading /> : <Text>{text}</Text>}
    </View>
  )
}

const items = [
  { label: 'Inbox', key: 'inbox', renderContent: () => <Item text="You have no new messages." /> },
  { label: 'Sent', key: 'sent', renderContent: () => <Item text="Your sent messages are listed here." /> },
  { label: 'Spam', key: 'spam', renderContent: () => <Item text="Spam messages are automatically filtered." /> },
]

const CONTENT = (
  <View fullW flex>
    <TabsHandler items={items}>
      <TabsMenu borderB />
      <ActiveTabContent lazy unmountOnClose />
    </TabsHandler>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Unmount on Close" code={CODE} content={CONTENT} />
}
