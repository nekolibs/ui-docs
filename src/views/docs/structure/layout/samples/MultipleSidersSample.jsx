import { Layout, LayoutHeader, LayoutContent, LayoutSider, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Layout, LayoutContent, LayoutHeader, LayoutSider, View } from '@neko-os/ui'

<Layout>
  <LayoutHeader height={65}>...</LayoutHeader>

  <View row flex>
    <LayoutSider width={350}>...</LayoutSider>
    <LayoutContent flex>...</LayoutContent> 
    <LayoutSider width={250}>...</LayoutSider>
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
        <LayoutSider bg="navy" center width={125}>
          <Text center label="Sider" />
        </LayoutSider>

        <LayoutContent flex height={300} bg="green" center>
          <Text center label="Content" />
        </LayoutContent>

        <LayoutSider bg="navy" center width={125}>
          <Text center label="Sider" />
        </LayoutSider>
      </View>
    </Layout>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="With multiple siders" code={CODE} content={CONTENT} padding={0} overflow="hidden" />
}
