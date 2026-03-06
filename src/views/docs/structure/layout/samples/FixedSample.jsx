import { Layout, LayoutHeader, LayoutContent, LayoutSider, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Layout, LayoutContent, LayoutHeader, LayoutSider, View } from '@neko-os/ui'

<Layout>
  <LayoutHeader height={65} sticky>...</LayoutHeader>

  <View row flex>
    <LayoutSider width={350} sticky scrollY>...</LayoutSider>
    <LayoutContent flex>...</LayoutContent> 
  </View>
</Layout>
`

const CONTENT = (
  <View flex relative>
    <Layout>
      <LayoutHeader bg="blue" center height={65}>
        <Text center label="Header" />
      </LayoutHeader>

      <View row flex>
        <LayoutSider bg="navy" center width={125} sticky>
          <Text center label="Sider" />
        </LayoutSider>
        <LayoutContent flex height={300} bg="green" center>
          <Text center label="Content" />
        </LayoutContent>
      </View>
    </Layout>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sticky header and sider" code={CODE} content={CONTENT} padding={0} overflow="hidden" />
}
