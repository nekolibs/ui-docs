import { Badge, Section, SectionItemLink, Tag, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Badge, Section, SectionItemLink, Tag, View } from '@neko-os/ui'

<Section>
  <SectionItemLink label="Notifications" onPress={() => {}}>
    <Badge value={3} />
  </SectionItemLink>

  <SectionItemLink label="Settings" onPress={() => {}}>
    <Tag label="Custom Tag" />
  </SectionItemLink>
</Section>
`

const CONTENT = (
  <View flex center>
    <View width={400} maxWidth={'100%'}>
      <Section>
        <SectionItemLink label="Notifications" onPress={() => {}}>
          <Badge value={3} />
        </SectionItemLink>

        <SectionItemLink label="Settings" onPress={() => {}}>
          <Tag label="Custom Tag" />
        </SectionItemLink>
      </Section>
    </View>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Custom Children" code={CODE} content={CONTENT} bg="transparent" border />
}
