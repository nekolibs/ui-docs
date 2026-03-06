import { Layout, LayoutHeader, LayoutContent, LayoutSider, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Layout, LayoutContent, LayoutHeader, LayoutSider } from '@neko-os/ui'

<Layout>
  <LayoutHeader height={65} borderB borderColor="">...</LayoutHeader>

  <View row flex>
    <LayoutSider width={350} borderR borderColor="">...</LayoutSider>
    <LayoutContent flex>...</LayoutContent> 
  </View>
</Layout>
`

const CONTENT = (
  <View flex relative>
    <Layout>
      <LayoutHeader center height={65} borderB>
        <Text center label="Header" />
      </LayoutHeader>

      <View row flex>
        <LayoutSider bg="overlayBG" center width={125} borderR>
          <Text center label="Sider" />
        </LayoutSider>

        <LayoutContent bg="overlayBG" flex height={300} center>
          <Text center label="Content" />
        </LayoutContent>
      </View>
    </Layout>
  </View>
)

export default function Sample() {
  return (
    <SampleCodeBlock
      title="Bordered"
      code={CODE}
      content={CONTENT}
      bg="transparent"
      border
      padding={0}
      overflow="hidden"
    />
  )
}
