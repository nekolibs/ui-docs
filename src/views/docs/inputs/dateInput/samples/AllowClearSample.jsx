import { DateInput, View } from '@neko-os/ui'
import dayjs from 'dayjs'
import React from 'react'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DateInput } from '@neko-os/ui'

<DateInput allowClear value={value} onChange={setValue} />
`

function Content() {
  const [value, setValue] = React.useState(dayjs())

  return (
    <View gap="md" flex center>
      <DateInput allowClear value={value} onChange={setValue} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Allow Clear" code={CODE} content={<Content />} />
}
