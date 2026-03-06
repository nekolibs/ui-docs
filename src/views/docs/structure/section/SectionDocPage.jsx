import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import WithTitleSample from './samples/WithTitleSample'
import MultipleSectionsSample from './samples/MultipleSectionsSample'
import SpreadSample from './samples/SpreadSample'
import IconSample from './samples/IconSample'
import LinkBasicUsageSample from './samples/LinkBasicUsageSample'
import LinkWithIconSample from './samples/LinkWithIconSample'
import LinkCustomChildrenSample from './samples/LinkCustomChildrenSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>Section</Text>
        <Text text3>Container component that groups items and automatically adds dividers between them.</Text>
      </View>

      <BasicUsageSample />
      <WithTitleSample />
      <MultipleSectionsSample />

      <View>
        <Text h2>SectionItem</Text>
        <Text text3>A label-value item designed to be used inside a Section. Wraps the LabelValue component.</Text>
      </View>

      <SpreadSample />
      <IconSample />

      <View>
        <Text h2>SectionItemLink</Text>
        <Text text3>An interactive section item that wraps SectionItem in a Link, displaying a right arrow indicator by default.</Text>
      </View>

      <LinkBasicUsageSample />
      <LinkWithIconSample />
      <LinkCustomChildrenSample />
    </View>
  )
}
