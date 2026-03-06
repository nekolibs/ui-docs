import { Pagination, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Pagination  } from '@neko-os/ui'

<Pagination pages={50} onChange={console.log} />
<Pagination pages={50} onChange={console.log} maxVisible={3} />
`

const CONTENT = (
  <View gap={15} flex center>
    <Pagination pages={50} onChange={console.log} />
    <Pagination pages={50} onChange={console.log} maxVisible={3} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Exetensive Pages" code={CODE} content={CONTENT} />
}
