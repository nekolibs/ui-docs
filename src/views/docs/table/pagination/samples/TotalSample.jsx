import { View, Pagination } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { Pagination } from '@neko-os/ui'

<Pagination total={55} itemsPerPage={10} onChange={console.log} />
`

const CONTENT = (
  <View row gap={15} flex center>
    <Pagination total={55} itemsPerPage={10} onChange={console.log} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="With Total" code={CODE} content={CONTENT} />
}
