import { ActiveTabContent, TabsHandler, TabsSegmentedMenu, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { View, ActiveTabContent, TabsHandler, TabsSegmentedMenu, Text } from '@neko-os/ui'

<TabsHandler items={items}>
  <View center>
    <TabsSegmentedMenu />
  </View>
  <ActiveTabContent />
</TabsHandler>
`

const items = [
  { label: 'Day', key: 'day', renderContent: () => <View bg="overlayBG" br="lg" padding="md" flex fullW><Text>Showing results for the last 24 hours.</Text></View> },
  { label: 'Week', key: 'week', renderContent: () => <View bg="overlayBG" br="lg" padding="md" flex fullW><Text>Showing results for the last 7 days.</Text></View> },
  { label: 'Month', key: 'month', renderContent: () => <View bg="overlayBG" br="lg" padding="md" flex fullW><Text>Showing results for the last 30 days.</Text></View> },
]

const CONTENT = (
  <View fullW flex gap="sm">
    <TabsHandler items={items}>
      <View center>
        <TabsSegmentedMenu />
      </View>
      <ActiveTabContent />
    </TabsHandler>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Segmented Menu" code={CODE} content={CONTENT} />
}
