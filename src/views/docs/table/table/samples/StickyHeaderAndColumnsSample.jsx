import { DataTable, Link, View } from '@neko-os/ui'
import { range } from 'ramda'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DataTable } from '@neko-os/ui'

const columns = [
  {
    label: 'Name',
    key: 'name',
    field: 'name',
    sticky: true,
    left: 0,
  },
  ...
  {
    label: 'Action',
    key: 'action',
    render: () => <Link label="Action" />,
    sticky: true,
    right: 0,
  },
]

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
    minWidth: 200,
    sticky: true,
    left: 0,
  },
  { label: 'Age', key: 'age', field: 'age', minWidth: 500 },
  { label: 'Age', key: 'age2', field: 'age', minWidth: 500 },
  { label: 'Age', key: 'age3', field: 'age', minWidth: 500 },
  { label: 'Age', key: 'age4', field: 'age', minWidth: 500 },
  { label: 'Age', key: 'age5', field: 'age', minWidth: 500 },
  { label: 'Age', key: 'age6', field: 'age', minWidth: 500 },
  { label: 'Age', key: 'age7', field: 'age', minWidth: 500 },
  {
    label: 'Action',
    key: 'action',
    render: () => <Link label="Action" />,
    sticky: true,
    right: 0,
  },
]

const data = range(1, 100).map((i) => ({ key: i, name: `Name ${i}`, age: i }))

const CONTENT = (
  <View>
    <DataTable border columns={columns} data={data} height={400} stickyHeader />
  </View>
)

export default function Sample() {
  return (
    <SampleCodeBlock
      title="Sticky Header and Columns"
      code={CODE}
      content={CONTENT}
      bg="transparent"
      padding={0}
      fullW
    />
  )
}
