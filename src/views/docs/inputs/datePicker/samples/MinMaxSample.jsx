import { DatePicker, View } from '@neko-os/ui'
import dayjs from 'dayjs'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DatePicker } from '@neko-os/ui'
import dayjs from 'dayjs'

<DatePicker min={dayjs().add(-5, 'day')} max={dayjs().add(5, 'day')} />
`

const CONTENT = (
  <View row gap={15} flex center>
    <DatePicker min={dayjs().add(-5, 'day')} max={dayjs().add(5, 'day')} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Min/Max" code={CODE} content={CONTENT} />
}
