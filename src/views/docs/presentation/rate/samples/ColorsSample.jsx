import { View, Rate } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Rate } from '@neko-os/ui'

<Rate green />
<Rate color="#000000" />
<Rate color="primary_op70" />
<Rate color="red+20" />
<Rate color="red-20" />
`

function Content() {
  return (
    <View gap={10} flex centerV>
      <Rate value={3} green />
      <Rate value={3} color="#000000" />
      <Rate value={3} color="primary_op70" />
      <Rate value={3} color="red+20" />
      <Rate value={3} color="red-20" />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Colors" code={CODE} content={<Content />} />
}
