import { DatePicker, View } from '@neko-os/ui'
import { is } from 'ramda'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DatePicker } from '@neko-os/ui'

<DatePicker type="month" />
`

function Content() {
  return (
    <View flex center>
      <DatePicker type="month" onChange={console.log} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Month Picker" code={CODE} content={<Content />} />
}
