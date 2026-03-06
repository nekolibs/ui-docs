import { Section, SectionItem, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Section, SectionItem } from '@neko-os/ui'

<Section>
  <SectionItem label="Email" value="john@example.com" icon="mail-line" spread />
  <SectionItem label="Phone" value="+1 234 567 890" icon="phone-line" spread />
  <SectionItem label="Location" value="New York" icon="map-pin-line" spread />
</Section>
`

const CONTENT = (
  <View flex center>
    <View width={400} maxWidth={'100%'}>
      <Section>
        <SectionItem label="Email" value="john@example.com" icon="mail-line" spread />
        <SectionItem label="Phone" value="+1 234 567 890" icon="phone-line" spread />
        <SectionItem label="Location" value="New York" icon="map-pin-line" spread />
      </Section>
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="With Icon" code={CODE} content={CONTENT} bg="transparent" border />
}
