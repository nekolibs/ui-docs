import { Pagination, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Pagination } from '@neko-os/ui'

<Pagination initialValue={2} pages={5} onChange={console.log} sm />
<Pagination initialValue={2} pages={5} onChange={console.log} md />
<Pagination initialValue={2} pages={5} onChange={console.log} lg />
`

const CONTENT = (
  <View gap={15} flex center>
    <Pagination initialValue={2} pages={5} onChange={console.log} sm />
    <Pagination initialValue={2} pages={5} onChange={console.log} md />
    <Pagination initialValue={2} pages={5} onChange={console.log} lg />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sizes" code={CODE} content={CONTENT} />
}
