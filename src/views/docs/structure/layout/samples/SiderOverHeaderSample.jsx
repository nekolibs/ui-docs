import { Layout, LayoutHeader, LayoutContent, LayoutSider, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Layout, LayoutContent, LayoutHeader, LayoutSider } from '@neko-os/ui'

<Layout row>
  <LayoutSider width={350}>...</LayoutSider>

  <Layout>
    <LayoutHeader height={65}>...</LayoutHeader>
    <LayoutContent flex>...</LayoutContent> 
  </Layout>
</Layout>
`

const CONTENT = (
  <View flex relative>
    <Layout row>
      <LayoutSider bg="navy" center width={125}>
        <Text center label="Sider" />
      </LayoutSider>

      <Layout>
        <LayoutHeader bg="blue" center height={65}>
          <Text center label="Header" />
        </LayoutHeader>

        <LayoutContent height={300} bg="green" center>
          <Text center label="Content" />
        </LayoutContent>
      </Layout>
    </Layout>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sider over header" code={CODE} content={CONTENT} padding={0} overflow="hidden" />
}
