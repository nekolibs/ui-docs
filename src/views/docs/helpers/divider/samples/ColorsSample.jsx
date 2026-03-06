import { Divider, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Icon } from '@neko-os/ui'

<Divider line color="divider+30" />
<Divider line color="divider+20" />
<Divider line color="divider+10" />
<Divider line />
<Divider line color="divider-10" />
<Divider line color="divider-20" />
<Divider line green />
<Divider line red />
<Divider line color="text_op20" />
`

const CONTENT = (
  <View>
    <Divider line color="divider+30" />
    <Divider line color="divider+20" />
    <Divider line color="divider+10" />
    <Divider line />
    <Divider line color="divider-10" />
    <Divider line color="divider-20" />
    <Divider line green />
    <Divider line red />
    <Divider line color="text_op20" />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={CONTENT} bg="transparent" border />
}
