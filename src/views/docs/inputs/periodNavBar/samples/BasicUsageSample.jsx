import { PeriodNavBar, View } from '@neko-os/ui'

import SampleCodeBlock from '../../../../../components/code/SampleCodeBlock'

const CODE = `
import { PeriodNavBar } from '@neko-os/ui'

<PeriodNavBar type="day" value={value} onChange={setValue} />
`

function Content() {
  return (
    <View flex>
      <PeriodNavBar type="day" onChange={console.log} />
    </View>
  )
}

export default function Sample() {
  return <SampleCodeBlock title="Basic Usage (Day)" code={CODE} content={<Content />} />
}
