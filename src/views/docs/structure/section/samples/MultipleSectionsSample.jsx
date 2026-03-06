import { Section, SectionItem, SectionItemLink, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Section, SectionItem, SectionItemLink } from '@neko-os/ui'

<Section title="Account">
  <SectionItem label="Name" value="John Doe" />
  <SectionItem label="Email" value="john@example.com" />
</Section>

<Section title="Settings">
  <SectionItemLink value="Notifications" onPress={() => {}} />
  <SectionItemLink value="Privacy" onPress={() => {}} />
  <SectionItemLink value="Language" onPress={() => {}} />
</Section>
`

const CONTENT = (
  <View flex center>
    <View width={400} maxWidth={'100%'} gap="lg">
      <Section title="Account">
        <SectionItem label="Name" value="John Doe" />
        <SectionItem label="Email" value="john@example.com" />
      </Section>

      <Section title="Settings">
        <SectionItemLink label="Notifications" onPress={() => {}} />
        <SectionItemLink label="Privacy" onPress={() => {}} />
        <SectionItemLink label="Language" onPress={() => {}} />
      </Section>
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Multiple Sections" code={CODE} content={CONTENT} bg="transparent" border />
}
