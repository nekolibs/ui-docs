import { Section, SectionItem, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Section, SectionItem } from '@neko-os/ui'

<Section>
  <SectionItem label="Name" value="John Doe" spread />
  <SectionItem label="Status" value="Active" spread />
  <SectionItem label="Role" value="Admin" spread />
</Section>
`

const CONTENT = (
  <View flex center>
    <View width={400} maxWidth={'100%'}>
      <Section>
        <SectionItem label="Name" value="John Doe" spread />
        <SectionItem label="Status" value="Active" spread />
        <SectionItem label="Role" value="Admin" spread />
      </Section>
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Spread" code={CODE} content={CONTENT} bg="transparent" border />
}
