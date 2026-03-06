import { ActiveTabContent, TabsHandler, TabsMenu, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { View, ActiveTabContent, TabsHandler, TabsMenu, Text } from '@neko-os/ui'

<TabsHandler items={items}>
  <View row>
    <View width="25%" borderR fullH>
      <TabsMenu vertical />
    </View>

    <ActiveTabContent fullH />
  </View>
</TabsHandler>
`

const items = [
  { label: 'Overview', key: 'overview', renderContent: () => <View br="lg" padding="md" flex fullW><Text>A summary of your account and recent activity.</Text></View> },
  { label: 'Security', key: 'security', renderContent: () => <View br="lg" padding="md" flex fullW><Text>Manage passwords, two-factor authentication, and sessions.</Text></View> },
  { label: 'Billing', key: 'billing', renderContent: () => <View br="lg" padding="md" flex fullW><Text>View invoices, payment methods, and subscription details.</Text></View> },
]

const CONTENT = (
  <View fullW flex>
    <TabsHandler items={items}>
      <View row>
        <View width="25%" borderR fullH>
          <TabsMenu vertical />
        </View>

        <ActiveTabContent fullH />
      </View>
    </TabsHandler>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Vertical" code={CODE} content={CONTENT} />
}
