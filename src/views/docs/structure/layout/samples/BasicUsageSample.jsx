import { Layout, LayoutContent, LayoutHeader, Text, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Layout, LayoutContent, LayoutHeader } from '@neko-os/ui'

<Layout>
  <LayoutHeader bg="navy" height={65}>...</LayoutHeader>
  <LayoutContent flex>...</LayoutContent>
</Layout>
`

const CONTENT = (
  <View flex relative>
    <Layout>
      <LayoutHeader bg="blue" center height={65}>
        <Text center label="Header" />
      </LayoutHeader>

      <LayoutContent height={300} bg="green" center>
        <Text center label="Content" />
      </LayoutContent>
    </Layout>
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} padding={0} overflow="hidden" />
}
