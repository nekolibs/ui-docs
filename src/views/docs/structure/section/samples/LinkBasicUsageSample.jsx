import { Section, SectionItemLink, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Section, SectionItemLink } from '@neko-os/ui'

<Section>
  <SectionItemLink label="Account" value="Profile" onPress={() => console.log('Profile')} />
  <SectionItemLink label="Alerts" value="Notifications" onPress={() => console.log('Notifications')} />
  <SectionItemLink label="Preferences" value="Settings" onPress={() => console.log('Settings')} />
</Section>
`

const CONTENT = (
  <View flex center>
    <View width={400} maxWidth={'100%'}>
      <Section>
        <SectionItemLink label="Account" value="Profile" onPress={() => console.log('Profile')} />
        <SectionItemLink label="Alerts" value="Notifications" onPress={() => console.log('Notifications')} />
        <SectionItemLink label="Preferences" value="Settings" onPress={() => console.log('Settings')} />
      </Section>
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} bg="transparent" border />
}
