import { Section, SectionItemLink, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Section, SectionItemLink } from '@neko-os/ui'

<Section>
  <SectionItemLink label="Account" value="Profile" icon="user-line" onPress={() => {}} />
  <SectionItemLink label="Alerts" value="Notifications" icon="notification-line" onPress={() => {}} />
  <SectionItemLink label="Preferences" value="Settings" icon="settings-3-line" onPress={() => {}} />
</Section>
`

const CONTENT = (
  <View flex center>
    <View width={400} maxWidth={'100%'}>
      <Section>
        <SectionItemLink label="Account" value="Profile" icon="user-line" onPress={() => {}} />
        <SectionItemLink label="Alerts" value="Notifications" icon="notification-line" onPress={() => {}} />
        <SectionItemLink label="Preferences" value="Settings" icon="settings-3-line" onPress={() => {}} />
      </Section>
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="With Icon" code={CODE} content={CONTENT} bg="transparent" border />
}
