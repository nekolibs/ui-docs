import { DataTable, Link, RadioGroup, Tag, View } from '@neko-os/ui'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DataTable } from '@neko-os/ui'

const columns = [...]
const data = [...]

<DataTable border columns={columns} data={data} grid />
`

const columns = [
  {
    label: 'Name',
    key: 'name',
    field: 'name',
    strong: true,
  },
  { label: 'Age', key: 'age', field: 'age' },
  {
    label: 'Gender',
    key: 'gender',
    field: 'gender',
    render: (value, record) => <Tag label={value} color={value === 'male' ? 'blue' : 'pink'} />,
  },
  {
    label: 'Action',
    key: 'action',
    render: () => <Link label="Action" />,
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
  return <SampleCodeBlock title="Bordered Cols" code={CODE} content={<Content />} bg="transparent" padding={0} fullW />
}
