import { DatePicker, View } from '@neko-os/ui'
import dayjs from 'dayjs'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DatePicker } from '@neko-os/ui'

<DatePicker allowClear />
<DatePicker type="week" allowClear />
<DatePicker type="month" allowClear />
<DatePicker type="quarter" allowClear />
<DatePicker type="year" allowClear />
`

function Content() {
  return (
    <View row gap="xl" wrap center>
      <DatePicker value={dayjs()} allowClear />
      <DatePicker type="week" value={dayjs()} allowClear />
      <DatePicker type="month" value={dayjs()} allowClear />
      <DatePicker type="quarter" value={dayjs()} allowClear />
      <DatePicker type="year" value={dayjs()} allowClear />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Allow Clear" code={CODE} content={<Content />} />
}
