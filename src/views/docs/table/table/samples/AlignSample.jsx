import { DataTable, Link, RadioGroup, Tag, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DataTable } from '@neko-os/ui'

const columns = [
  { label: 'Age (to left)', key: 'ageL', field: 'age' },
  { label: 'Age (to right)', key: 'ageR', field: 'age', align: 'right' },
  { label: 'Age (center)', key: 'ageC', field: 'age', center: true },
]
const data = [...]

<DataTable border columns={columns} data={data} grid />
`

const columns = [
  {
    label: 'Name',
    key: 'name',
    field: 'name',
    strong: true,
    padding: 0,
  },
  { label: 'Age', key: 'age', field: 'age', align: 'right' },
  {
    label: 'Gender',
    key: 'gender',
    field: 'gender',
    render: (value, record) => <Tag label={value} color={value === 'male' ? 'blue' : 'pink'} />,
    center: true,
  },
  {
    label: 'Action',
    key: 'action',
    render: () => <Link label="Action" />,
    width: 50,
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

function Content() {
  return (
    <View>
      <DataTable border columns={columns} data={data} grid />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Cols Align" code={CODE} content={<Content />} bg="transparent" padding={0} fullW />
}
