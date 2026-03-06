import { DatePicker, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { DatePicker } from '@neko-os/ui'

<DatePicker type="quarter" />
`

function Content() {
  return (
    <View flex center>
      <DatePicker type="quarter" onChange={console.log} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Quarter Picker" code={CODE} content={<Content />} />
}
