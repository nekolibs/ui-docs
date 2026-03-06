import { DataTable, Link, View } from '@neko-os/ui'
import { range } from 'ramda'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DataTable } from '@neko-os/ui'

const columns = [...]
const data = [...]

<DataTable border columns={columns} data={data} height={400} stickyHeader />
`

const columns = [
  {
    label: 'Name',
    key: 'name',
    field: 'name',
    strong: true,
    size: 'h6',
  },
  { label: 'Age', key: 'age', field: 'age' },
  { label: 'Action', key: 'action', render: () => <Link label="Action" /> },
]

const data = range(1, 100).map((i) => ({ key: i, name: `Name ${i}`, age: i }))

const CONTENT = (
  <View>
    <DataTable border columns={columns} data={data} height={400} stickyHeader />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Sticky Header" code={CODE} content={CONTENT} bg="transparent" padding={0} fullW />
}
