import { View, Pagination } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Pagination } from '@neko-os/ui'

<Pagination initialValue={2} pages={5} onChange={console.log} />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Pagination initialValue={2} pages={5} onChange={console.log} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage" code={CODE} content={CONTENT} />
}
