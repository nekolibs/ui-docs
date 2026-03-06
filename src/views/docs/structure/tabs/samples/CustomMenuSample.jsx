import { ActiveTabContent, RadioGroup, TabsHandler, Text, View, useTabs } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { ActiveTabContent, TabsHandler, RadioGroup } from '@neko-os/ui'

function CustomMenu() {
  const { activeKey, items, onChange } = useTabs()

  return <RadioGroup options={items} valueKey="key" value={activeKey} onChange={onChange} />
}

function Main() {
  return (
    <TabsHandler items={items}>
      <CustomMenu />
      <ActiveTabContent />
    </TabsHandler>
  )
}
`

const items = [
  { label: 'All', key: 'all', renderContent: () => <View bg="overlayBG" br="lg" padding="md" flex fullW><Text>Displaying all items without filters.</Text></View> },
  { label: 'Active', key: 'active', renderContent: () => <View bg="overlayBG" br="lg" padding="md" flex fullW><Text>Displaying only active items.</Text></View> },
  { label: 'Archived', key: 'archived', renderContent: () => <View bg="overlayBG" br="lg" padding="md" flex fullW><Text>Displaying archived items.</Text></View> },
]

function CustomMenu() {
  const { activeKey, items, onChange } = useTabs()

  return <RadioGroup options={items} valueKey="key" value={activeKey} onChange={onChange} />
}

const CONTENT = (
  <View fullW flex gap="sm">
    <TabsHandler items={items}>
      <CustomMenu />
      <ActiveTabContent />
    </TabsHandler>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Custom Menu" code={CODE} content={CONTENT} />
}
