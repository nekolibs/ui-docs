import { DataTable, Tag, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DataTable } from '@neko-os/ui'

const columns = [
  { label: 'Name', key: 'name', field: 'name', strong: true, size: 'h6', width: '65%' },
  { label: 'Age', key: 'age', field: 'age', width: 40 },
  {
    label: 'Gender',
    key: 'gender',
    field: 'gender',
    render: (value, record) => <Tag label={value} color={value === 'male' ? 'blue' : 'pink'} />,
  },
]

const data = [...]

<DataTable border columns={columns} data={data} />
`

const columns = [
  { label: 'Name', key: 'name', field: 'name', strong: true, size: 'h6', width: '65%' },
  { label: 'Age', key: 'age', field: 'age', width: 40 },
  {
    label: 'Gender',
    key: 'gender',
    field: 'gender',
    render: (value, record) => <Tag label={value} color={value === 'male' ? 'blue' : 'pink'} />,
  },
]

const data = [
  {
    key: 1,
    name: 'Chris',
    age: 36,
    gender: 'male',
  },

  {
    key: 2,
    name: 'Amanda',
    age: 35,
    gender: 'female',
  },

  {
    key: 3,
    name: 'Maggie',
    age: 7,
    gender: 'female',
  },
]

const CONTENT = (
  <View>
    <DataTable border columns={columns} data={data} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Cols width" code={CODE} content={CONTENT} bg="transparent" padding={0} fullW />
}
