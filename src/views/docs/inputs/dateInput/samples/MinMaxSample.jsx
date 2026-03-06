import { DateInput, View } from '@neko-os/ui'
import dayjs from 'dayjs'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DateInput } from '@neko-os/ui'
import dayjs from 'dayjs'

<DateInput min={dayjs().add(-5, 'day')} max={dayjs().add(5, 'day')} />
`

const CONTENT = (
  <View gap={15} flex center>
    <DateInput min={dayjs().add(-5, 'day')} max={dayjs().add(5, 'day')} />
  </View>
)

export default function Sample() {
  return <SampleCodeBlock title="Min/Max" code={CODE} content={CONTENT} />
}
