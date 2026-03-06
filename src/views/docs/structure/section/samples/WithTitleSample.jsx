import { Section, SectionItem, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Section, SectionItem } from '@neko-os/ui'

<Section title="Personal Info">
  <SectionItem label="Name" value="John Doe" />
  <SectionItem label="Email" value="john@example.com" />
  <SectionItem label="Phone" value="+1 234 567 890" />
</Section>
`

const CONTENT = (
  <View flex center>
    <View width={400} maxWidth={'100%'}>
      <Section title="Personal Info">
        <SectionItem label="Name" value="John Doe" />
        <SectionItem label="Email" value="john@example.com" />
        <SectionItem label="Phone" value="+1 234 567 890" />
      </Section>
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="With Title" code={CODE} content={CONTENT} bg="transparent" border />
}
