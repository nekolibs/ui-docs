import { View, Rate } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Rate } from '@neko-os/ui'

<Rate sm />
<Rate md />
<Rate lg />
`

function Content() {
  return (
    <View gap={10} flex centerV>
      <Rate value={3} sm />
      <Rate value={3} md />
      <Rate value={3} lg />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={<Content />} />
}
