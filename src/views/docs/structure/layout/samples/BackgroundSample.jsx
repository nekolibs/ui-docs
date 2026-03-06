import { Layout, LayoutHeader, LayoutContent, LayoutSider, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Layout, LayoutContent, LayoutHeader, LayoutSider, View } from '@neko-os/ui'

<Layout>
  <LayoutHeader height={65} bg="navy">...</LayoutHeader>

  <View row flex>
    <LayoutSider width={350} bg="primary">...</LayoutSider>
    <LayoutContent flex bg="blue+20">...</LayoutContent> 
  </View>
</Layout>
`

const CONTENT = (
  <View flex relative>
    <Layout>
      <LayoutHeader bg="navy" center height={65}>
        <Text center label="Header" />
      </LayoutHeader>

      <View row flex>
        <LayoutSider bg="primary" center width={125}>
          <Text center label="Sider" />
        </LayoutSider>
        <LayoutContent flex height={300} bg="blue+20" center>
          <Text center label="Content" />
        </LayoutContent>
      </View>
    </Layout>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Background" code={CODE} content={CONTENT} padding={0} overflow="hidden" />
}
