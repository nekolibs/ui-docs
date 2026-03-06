import { ActiveTabContent, Loading, TabsHandler, TabsMenu, Text, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ActiveTabContent, TabsHandler, TabsMenu, Text } from '@neko-os/ui'

const items = [...]

<TabsHandler items={items}>
  <TabsMenu borderB />
  <ActiveTabContent lazy />
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
  { label: 'Posts', key: 'posts', renderContent: () => <Item text="Your published posts will appear here." /> },
  { label: 'Drafts', key: 'drafts', renderContent: () => <Item text="Unpublished drafts are saved automatically." /> },
  { label: 'Saved', key: 'saved', renderContent: () => <Item text="Items you bookmarked for later." /> },
]

const CONTENT = (
  <View fullW flex>
    <TabsHandler items={items}>
      <TabsMenu borderB />
      <ActiveTabContent lazy />
    </TabsHandler>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Lazy" code={CODE} content={CONTENT} />
}
